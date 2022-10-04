import { AxiosHttpClient } from '@/infra/http'
import { fakeHttpRequest,makeAxiosResponse } from '@/tests/domain/mocks'
import axios from 'axios'

jest.mock('axios')

const fakeRequest = fakeHttpRequest()
const fakeAxiosResponse = makeAxiosResponse()

describe('AxiosHttpClient', () => {
  let sut: AxiosHttpClient
  let mockedAxios: jest.Mocked<typeof axios>

  beforeAll(() => {
    mockedAxios = axios as jest.Mocked<typeof axios>
    mockedAxios.request.mockResolvedValue(fakeAxiosResponse)
  })

  beforeEach(() => {
    sut = new AxiosHttpClient()
  })

  it('should call request with correct values',async () => {
    await sut.request(fakeRequest)
    expect(mockedAxios.request).toHaveBeenCalledWith(fakeRequest)
  })

  it('should return throw if axios throws',async () => {
    mockedAxios.request.mockRejectedValueOnce(new Error())
    expect(mockedAxios.request).rejects.toThrowError()
  })

  it('should return with correct values',async () => {
    const httpResponse = await sut.request(fakeRequest)
    expect(httpResponse).toEqual({
      statusCode: fakeAxiosResponse.status,
      body: fakeAxiosResponse.data
    })
  })

  it('should return throw if request throws',async () => {
    mockedAxios.request.mockRejectedValueOnce(new Error())
    await expect(sut.request(fakeRequest)).rejects.toThrow()
  })
})
