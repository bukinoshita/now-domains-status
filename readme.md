# now-domains-status [![Build Status](https://travis-ci.org/bukinoshita/now-domains-status.svg?branch=master)](https://travis-ci.org/bukinoshita/now-domains-status)

> Check now domains availability


## Install

```bash
$ yarn add now-domains-status
```


## Usage

```js
const nowDomainsStatus = require('now-domains-status')

nowDomainsStatus('bukinoshita.io').then(res => res)
// => { available: false }
```


## API

### nowDomainsStatus(domain, [options])

Returns a `promise`

#### domain

Type: `string`<br/>
Required

domain name to be checked

#### options

Type: `object`

##### secret

Type: `string`

If `secret` is not passed, it will try to get your local `secret` stored on `.now/auth.json`. If you don't use [now](https://zeit.co/now), you must pass a `secret`. Get one [here](https://zeit.co/account/tokens)


## Related

- [now-domains](https://github.com/bukinoshita/now-domains) - CLI for this module
- [now-domains-price](https://github.com/bukinoshita/now-domains-price) — Check now domains price


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
