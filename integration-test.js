import phantomjs from 'phantomjs-prebuilt'
import {spawn} from 'child_process'

phantomjs.run('--webdriver=4444').then(program => {
  console.log('Started PhantomJS.')
  const wdio = spawn('node_modules/.bin/wdio', ['wdio.conf.js'], {
    stdio: 'inherit'
  })

  wdio.on('close', code => {
    program.kill()
    process.exit(code)
  })
})
