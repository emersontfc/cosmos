const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./setting.json'));

// Other
global.owner = ["258848858288","258848858288"]
global.packname = 'COSMOS'
global.youtube = 'https://instagram.com/emerson.tfc'
global.author = '© COSMOS MD'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Concluido com Sucesso Prezado/a~',
    admin: 'Este comando só pode ser usado pelo administrador !',
    botAdmin: 'Este comando só pode ser usado quando o bot se torna administrador !',
    owner: 'Este comando só pode ser usado pelo proprietário !',
    group: 'Este comando só pode ser usado em grupos !',
    private: 'Este comando só pode ser usado em privado !',
	bot: 'Recursos especiais do usuário do número do bot',
    errtoimg: 'Desculpe, atualmente não é compatível com o adesivo GIF !',
    wait: '⏳ Sendo processado',
	lockCmd: 'Recurso não ativado pelo proprietário!',
	example1: 'Bem-vindo @user ao grupo @subject. Não se esqueça de ler as regras @desc\n\nNote :\n1. @user (Mencione a adesão do usuário)\n2. @bio (Get Bio User Join)\n3.@date (data agora)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}
global.thumb = fs.readFileSync(setting.thumbnail)

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
