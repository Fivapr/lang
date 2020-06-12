import { injectable } from 'inversify'

@injectable()
export class LingualeoApi {
  addWord = (word: string) =>
    fetch(`https://api.lingualeo.com/addword?word=${word}`, {
      headers: {
        accept: '*/*',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'Set-Cookie': 'SameSite=None',
      },
      referrerPolicy: 'no-referrer-when-downgrade',
      body: null,
      method: 'GET',
      mode: 'no-cors',
      credentials: 'include',
    })
}
