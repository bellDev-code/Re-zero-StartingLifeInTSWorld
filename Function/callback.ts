function func(title:string, cb: (title: string) => string) {

  title = `${title} + ${title}`

  const result =  cb(title)

  return function (str: string) {
    return result + str
  }
}

const concatHello = (text: string) => {
  return `hello ${text}`
}

const concatBye = (text: string) => {
    return `${text} bye`
}

func('더블브이', concatHello)('man~')
func('더블브이', concatBye)('female~')
