exports.wait = () => {
    return `⏳ Por favor espere um momento~`
}

exports.ok = () => {
    return `✅ Concluido com Sucesso~`
}

exports.err = () => {
    return `⚠️ Erro ao tentar recursos`
}
exports.erorLink = () => {
    return `⚠️ Erro no Link`
}
exports.media = () => {
    return `Selecione a mídia que deseja baixar`
}
exports.replyImg = (prefix, command) => {
    return `Enviar / responder foto com legenda ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Formato errado Por favor, verifique como usar em*${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Por favor, insira a mensagem que deseja transmitir!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Comando *${cmd}* não registrado em *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Comando especial para o dono!`
}

exports.doneOwner = () => {
    return `✅  ️Está feito, proprietário ~`
}

exports.groupOnly = () => {
    return `👥 Este comando só pode ser usado em grupos!`
}

exports.adminOnly = () => {
    return `🙅  Este comando só pode ser usado por administradores de grupo!`
}

exports.nhFalse = () => {
    return `Código inválido!`
}

exports.listBlock = (blockNumber) => {
    return `*── SALÃO DE VERGONHA」 ──*
    
    Total bloqueado: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎O usuário não é um administrador! ❎`
}

exports.adminAlready = () => {
    return `❎ Não é possível promover um usuário que é administrador!`
}

exports.botNotAdmin = () => {
    return `Faça do bot um administrador primeiro! 🙏`
}

exports.received = (pushname) => {
    return `
Oi ${pushname}!
Obrigado por relatar, nós receberemos seu relatório em breve.`
}

exports.videoLimit = () => {
    return `O tamanho do arquivo é muito grande!`
}

exports.notNum = (q) => {
    return `"${q}", não um número!`
}

exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Bem vindo ${salam} ${pushname} 😖*
*⌚Time Server : ${time}*
*📚 Menu do COSMOS :*

╭─❒ 「 INFO DO COSMOS 」 
├ ${prefix}dono
├ ${prefix}regras
├ ${prefix}botstatus
╰❒ ${prefix}donate


╭─❒ 「 DONO 」 
├ < evaluate
├ > evaluate
├ $ exec
├ => exec
├ ${prefix}join [link]
├ ${prefix}self
├ ${prefix}public [only bot]
├ ${prefix}del [pesan bot]
╰❒ ${prefix}setppbot [reply image]

╭─❒ 「 GRUPOS 」 
├ ${prefix}leave
├ ${prefix}add [258***]
├ ${prefix}remover @tag
├ ${prefix}revogar
├ ${prefix}promover
├ ${prefix}rebaixar
├ ${prefix}sair
├ ${prefix}linkgc
├ ${prefix}grupo [abrir/fechar]
├ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]


╭─❒ 「 PESQUISA 」 
├ ${prefix}ytsearch [query]
├ ${prefix}film [query]
├ ${prefix}wallpaper [query]
╰❒ ${prefix}pinterest [query]


╭─❒ 「 CONVERSOR 」 
├ ${prefix}stiker [reply image]
╰❒${prefix}toimg [reply sticker]


╭─❒ 「 EFEITOS 」 
├ ${prefix}wanted [reply image]
├ ${prefix}utatoo [reply image]
├ ${prefix}unsharpen [reply image]
├ ${prefix}thanos [reply image]
├ ${prefix}sniper [reply image]
├ ${prefix}sharpen [reply image]
├ ${prefix}sepia [reply image]
├ ${prefix}scary [reply image]
├ ${prefix}rip [reply image]
├ ${prefix}redple [reply image]
├ ${prefix}rejected [reply image]
├ ${prefix}posterize [reply image]
├ ${prefix}ps4 [reply image]
├ ${prefix}pixelize [reply image]
├ ${prefix}missionpassed [reply image]
├ ${prefix}moustache [reply image]
├ ${prefix}lookwhatkarenhave [reply image]
├ ${prefix}jail [reply image]
├ ${prefix}invert [reply image]
├ ${prefix}instagram [reply image]
├ ${prefix}greyscale [reply image]
├ ${prefix}glitch [reply image]
├ ${prefix}frame [reply image]
├ ${prefix}fire [reply image]
├ ${prefix}distort [reply image]
├ ${prefix}dictator [reply image]
├ ${prefix}deepfry [reply image]
├ ${prefix}ddungeon [reply image]
├ ${prefix}circle [reply image]
├ ${prefix}challenger [reply image]
├ ${prefix}burn [reply image]
├ ${prefix}beautiful [reply image]
├ ${prefix}jail [reply image]
├ ${prefix}red [reply image]
├ ${prefix}bloo [reply image]
├ ${prefix}blue [reply image]
├ ${prefix}sepia [reply image]
├ ${prefix}green [reply image]
├ ${prefix}glass [reply image]
├ ${prefix}invert [reply image]
├ ${prefix}blurple [reply image]
├ ${prefix}blurple2 [reply image]
├ ${prefix}wasted [reply image]
├ ${prefix}passed [reply image]
├ ${prefix}triggered [reply image]
├ ${prefix}comrade [reply image]
├ ${prefix}greyscale [reply image]
├ ${prefix}threshold [reply image]
├ ${prefix}brightness [reply image]
╰❒ ${prefix}invertgreyscale [reply image]


╭─❒ 「 DOWNLOWADERS 」 
├ ${prefix}tiktok [link]
├ ${prefix}tiktoknowm [link]
├ ${prefix}tiktokwm [link]
├ ${prefix}tiktokaudio [link]
├ ${prefix}ytdl [link]
├ ${prefix}play [query]
├ ${prefix}ytmp3 [link]
├ ${prefix}ytmp4 [link]
├ ${prefix}facebook [link]
├ ${prefix}facebooksd [link]
├ ${prefix}facebookhd [link]
├ ${prefix}fbaudio [link]
├ ${prefix}igstory [username]
├ ${prefix}igdl [link]
├ ${prefix}igphoto [link]
├ ${prefix}igvideo [link]
├ ${prefix}igreels [link]
├ ${prefix}igtv [link]
╰❒ ${prefix}twitter link



╭─❒ 「 AGRADECIMENTOS 」 
├ AjudaMz
├ DATA SCIENCE GOOGLE
├ YHWH 
╰❒ And All Support

    `
}

exports.rules = (prefix) => {
    return `
*── 「 RREGRAS E FAQ 」 ──*

1. N encha de SPAM. 🙅
: *❎ AVISO/BLOQUEIO*

2. N ligue para o Bot. ☎️
Punição : *❎ BLOQUEIO*

3. Não explore bots.😖
Punição : *BLOQUEIO PERMANENTE*

🗯️ O bot não está ou está lento para responder?
➡️Pode ser afetado por rede, sinal, banido pelo Whatsapp e algum motivo. Continue obedecendo às regras‼️

Se você entende as regras, digite * $ {prefix}allmenu* para começar!

⚠️ Todas as políticas e condições do COSMOS são mantidas pelo proprietário e todas as mudanças de política, a qualquer momento o proprietário tem o direito de revogar, bloquear usuários(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Alphabot
😖🙏
`
}
exports.welcome = () =>{
	return`Me Saude 🤗
	
📛 Nome :
🔞 Idade :
🧑 Genero :
🏙️ Cidade :
╰ Siga as regras a risca ~`
}
exports.leave = () =>{
	return`Saiu do Grupo por n ter beleza suficiente`
}
exports.source = () =>{
return`*── 「 FONTE 」 ──*

CODIGO OFICIAL INDISPONIVEL DIGITE .DONATE PARA COMPRAR O BOT
`
}
exports.tos = (ownernomer) => {
    return `
*── 「 DONATE 」 ──*

OI 👋
Vocês podem me apoiar para manter este bot atualizado com:
🏧 258848858288 (MPESA/CONTA MOVEL)

Qualquer quantia da sua doação significará muito 👍

Obrigado!

Contacte o dono:
wa.me/${ownernomer} (Dono)

    `
}
