const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./setting.json'));

// Other
global.owner = ["258848858288","258848858288","258848858288"]
global.packname = '© Cosmos MD'
global.youtube = 'https://instagram.com/emerson.tfc'
global.author = 'Mr Charles'
global.sessionName = 'session'
global.flaming = "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text="
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Feito com sucesso prezado!!!.~',
    admin: 'Este comando só pode ser usado pelo administrador !',
    botAdmin: 'Este comando funciona quando o Cosmos se torna admin !',
    owner: 'Comando Privado para o Dono!',
    group: 'Este comando só pode ser usado em grupos!',
    private: 'Este comando só pode ser usado em privado !',
	bot: 'Recursos especiais do usuário do número do bot',
    errtoimg: 'Desculpe, atualmente não é compatível com o adesivo gif !',
    wait: '⏳ Aguarde, estou processando...',
	lockCmd: 'Recursos não ativados pelo proprietário!',
	example1: 'Bem-vindo @user ao grupo @subject. Não se esqueça de ler as regras @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}
global.thumb = fs.readFileSync(setting.thumbnail)

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
