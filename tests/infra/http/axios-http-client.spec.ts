import { AxiosHttpClient } from '@/infra/http'
import { fakeHttpRequest,fakeHttpResponse } from '@/tests/domain/mocks'
import axios from 'axios'

jest.mock('axios')

const fakeRequest = fakeHttpRequest()
const fakeResponse = fakeHttpResponse()

describe('AxiosHttpClient', () => {
  let sut: AxiosHttpClient
  let mockedAxios: jest.Mocked<typeof axios>

  beforeAll(() => {
    mockedAxios = axios as jest.Mocked<typeof axios>
    mockedAxios.request.mockResolvedValue({ data: fakeResponse.body, status: fakeResponse.statusCode })
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
    expect(httpResponse).toBe(fakeResponse.body)
  })

  it('should return throw if request throws',async () => {
    mockedAxios.request.mockRejectedValueOnce(new Error())
    await expect(sut.request(fakeRequest)).rejects.toThrow()
  })
})
