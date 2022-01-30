const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./setting.json'));

// Other
global.owner = ["258848858288","258848858288","258848858288"]
global.packname = '© Alphabot MD'
global.youtube = 'https://instagram.com/emerson.tfc'
global.author = 'Workx'
global.sessionName = 'session'
global.flaming = "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text="
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Pronto, Concluidooo~',
    admin: 'Este comando só pode ser usado pelo administrador!',
    botAdmin: 'Este comando só  pode ser usado quando o bot se torna administrador!',
    owner: 'Este comando só pode ser usado pelo proprietário!',
    group: 'Este comando só pode ser usado em grupos!',
    private: 'Este comando só pode ser usado em privado !',
	bot: 'Recursos especiais do usuário do número do bot',
    errtoimg: 'Desculpe, atualmente não é compatível com o adesivo gif!',
    wait: '⏳ Estou processando, por favor aguarde',
	lockCmd: 'Recursos não ativados pelo proprietário!',
	example1: 'Bem Vindo/a  @user ao Grupo @subject Pergunte aos proprietarios quais as regras e leia a  @desc\n\nNota :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}
global.thumb = fs.readFileSync(setting.thumbnail)

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
