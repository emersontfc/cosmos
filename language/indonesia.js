exports.wait = () => {
    return `⏳ Por favor espere um momento~`
}

exports.ok = () => {
    return `✅ Prontos!!!~`
}

exports.err = () => {
    return `⚠️ Recursos moderados de erro`
}
exports.erorLink = () => {
    return `⚠️ Link com algum erro`
}
exports.media = () => {
    return `Selecione a mídia que deseja baixar`
}
exports.replyImg = (prefix, command) => {
    return `Enviar / responder foto com legenda ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Formato errado Por favor, verifique como usar em *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Por favor, insira a mensagem que deseja transmitir!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* não registrado em*${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Este comando é para o dono!`
}

exports.doneOwner = () => {
    return `✅  ️Está feito, proprietário ~`
}

exports.groupOnly = () => {
    return `👥  Este comando só pode ser usado em grupos!`
}

exports.adminOnly = () => {
    return `🙅 Este comando só pode ser usado por administradores de grupo!`
}

exports.nhFalse = () => {
    return `Código inválido!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 SALÃO DE VERGONHA 」 ──*
    
    Total bloqueado: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ O usuário não é um administrador! ❎`
}

exports.adminAlready = () => {
    return `❎ Não é possível promover o usuário que é administrador!`
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
exports.menunya = (salam, pushname) =>{
	return`Oi ${pushname} 👋 Bem Vindo ${salam} , 
    Eu sou Cosmos-Md, este bot é um Whatsapp Multi-Device Beta.
    Se você encontrar algum tipo de bug ou erro, por favor entenda.
    fale com o proprietário para que seja consertado imediatamente🙏      
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Welcome ${salam} ${pushname} 😖*
*⌚Time Server : ${time}*
*📚 Menu Cosmos-Md :*

╭─❒ 「 Bot Info 」 
├ ${prefix}dono
├ ${prefix}regras
├ ${prefix}botstatus
╰❒ ${prefix}doar


╭─❒ 「 Owner 」 
├ < evaluate
├ > evaluate
├ $ exec    
├ => exec
├ ${prefix}sendsesi
├ ${prefix}join [link]
├ ${prefix}self
├ ${prefix}public [only bot]
├ ${prefix}del [pesan bot]
╰❒ ${prefix}setppbot [reply image]

╭─❒ 「 Grupo 」 
├ ${prefix}revogar
├ ${prefix}sair
├ ${prefix}add [258***]
├ ${prefix}remover @tag
├ ${prefix}revogar
├ ${prefix}leave
├ ${prefix}linkgc
├ ${prefix}grupo [abrir/fechar]
├ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]

╭─❒ 「 Anime 」 
├ ${prefix}quotesanime
├ ${prefix}anime [query]
├ ${prefix}manga [query]
╰❒ ${prefix}character [query]


╭─❒ 「 Search 」 
├ ${prefix}ytsearch [query]
├ ${prefix}film [query]
├ ${prefix}wallpaper [query]
╰❒ ${prefix}pinterest [query]


╭─❒ 「 Converter 」 
├ ${prefix}stiker [reply image]
├ ${prefix}tourl [image/video]
├ ${prefix}togif [sticker]
├ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]


╭─❒ 「 Image Effect 」 
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


╭─❒ 「 Download 」 
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

 ╭─❒ 「 Textpro Menu 」
├ ${prefix}halloween2 text|text2
├ ${prefix}horror text|text2
├ ${prefix}game8bit text|text2
├ ${prefix}layered text|text2
├ ${prefix}glitch2 text|text2
├ ${prefix}coolg text|text2
├ ${prefix}coolwg text|text2
├ ${prefix}realistic text|text2
├ ${prefix}space3d text|text2
├ ${prefix}gtiktok text|text2
├ ${prefix}stone text|text2
├ ${prefix}marvel text|text2
├ ${prefix}marvel2 text|text2
├ ${prefix}avengers text|text2
├ ${prefix}metalr text|text2
├ ${prefix}metalg text|text2
├ ${prefix}metalg2 text|text2
├ ${prefix}halloween2 text|text2
├ ${prefix}lion text|text2
├ ${prefix}wolf_bw text|text2
├ ${prefix}wolf_g text|text2
├ ${prefix}ninja text|text2
├ ${prefix}3dsteel text|text2
├ ${prefix}horror2 text|text2
├ ${prefix}lava text|text2
├ ${prefix}bagel text|text2
├ ${prefix}blackpink text
├ ${prefix}rainbow2 text
├ ${prefix}water_pipe text
├ ${prefix}halloween text
├ ${prefix}sketch text
├ ${prefix}sircuit text
├ ${prefix}discovery text
├ ${prefix}metallic2 text
├ ${prefix}fiction text
├ ${prefix}demon text
├ ${prefix}transformer text
├ ${prefix}berry text
├ ${prefix}thunder text
├ ${prefix}magma text
├ ${prefix}3dstone text
├ ${prefix}neon text
├ ${prefix}glitch text
├ ${prefix}harry_potter text
├ ${prefix}embossed text
├ ${prefix}broken text
├ ${prefix}papercut text
├ ${prefix}gradient text
├ ${prefix}glossy text
├ ${prefix}watercolor text
├ ${prefix}multicolor text
├ ${prefix}neon_devil text
├ ${prefix}underwater text
├ ${prefix}bear text
├ ${prefix}wonderfulg text
├ ${prefix}christmas text
├ ${prefix}neon_light text
├ ${prefix}snow text
├ ${prefix}cloudsky text
├ ${prefix}luxury2 text
├ ${prefix}gradient2 text
├ ${prefix}summer text
├ ${prefix}writing text
├ ${prefix}engraved text
├ ${prefix}summery text
├ ${prefix}3dglue text
├ ${prefix}metaldark text
├ ${prefix}neonlight text
├ ${prefix}oscar text
├ ${prefix}minion text
├ ${prefix}holographic text
├ ${prefix}purple text
├ ${prefix}glossyb text
├ ${prefix}deluxe2 text
├ ${prefix}glossyc text
├ ${prefix}fabric text
├ ${prefix}neonc text
├ ${prefix}newyear text
├ ${prefix}newyear2 text
├ ${prefix}metals text
├ ${prefix}xmas text
├ ${prefix}blood text
├ ${prefix}darkg text
├ ${prefix}joker text
├ ${prefix}wicker text
├ ${prefix}natural text
├ ${prefix}firework text
├ ${prefix}skeleton text
├ ${prefix}balloon text
├ ${prefix}balloon2 text
├ ${prefix}balloon3 text
├ ${prefix}balloon4 text
├ ${prefix}balloon5 text
├ ${prefix}balloon6 text
├ ${prefix}balloon7 text
├ ${prefix}steel text
├ ${prefix}gloss text
├ ${prefix}denim text
├ ${prefix}decorate text
├ ${prefix}decorate2 text
├ ${prefix}peridot text
├ ${prefix}rock text
├ ${prefix}glass text
├ ${prefix}glass2 text
├ ${prefix}glass3 text
├ ${prefix}glass4 text
├ ${prefix}glass5 text
├ ${prefix}glass6 text
├ ${prefix}glass7 text
├ ${prefix}glass8 text
├ ${prefix}captain_as2 text
├ ${prefix}robot text
├ ${prefix}equalizer text
├ ${prefix}toxic text
├ ${prefix}sparkling text
├ ${prefix}sparkling2 text
├ ${prefix}sparkling3 text
├ ${prefix}sparkling4 text
├ ${prefix}sparkling5 text
├ ${prefix}sparkling6 text
├ ${prefix}sparkling7 text
├ ${prefix}decorative text
├ ${prefix}chocolate text
├ ${prefix}strawberry text
├ ${prefix}koifish text
├ ${prefix}bread text
├ ${prefix}matrix text
├ ${prefix}blood2 text
├ ${prefix}neonligth2 text
├ ${prefix}thunder2 text
├ ${prefix}3dbox text
├ ${prefix}neon2 text
├ ${prefix}roadw text
├ ${prefix}bokeh text
├ ${prefix}gneon text
├ ${prefix}advanced text
├ ${prefix}dropwater text
├ ${prefix}wall text
├ ${prefix}chrismast text
├ ${prefix}honey text
├ ${prefix}drug text
├ ${prefix}marble text
├ ${prefix}marble2 text
├ ${prefix}ice text
├ ${prefix}juice text
├ ${prefix}rusty text
├ ${prefix}abstra text
├ ${prefix}biscuit text
├ ${prefix}wood text
├ ${prefix}scifi text
├ ${prefix}metalr text
├ ${prefix}purpleg text
├ ${prefix}shiny text 
├ ${prefix}jewelry text
├ ${prefix}jewelry2 text
├ ${prefix}jewelry3 text
├ ${prefix}jewelry4 text
├ ${prefix}jewelry5 text
├ ${prefix}jewelry6 text
├ ${prefix}jewelry7 text
├ ${prefix}jewelry8 text
├ ${prefix}metalh text
├ ${prefix}golden text
├ ${prefix}glitter text
├ ${prefix}glitter2 text
├ ${prefix}glitter3 text
├ ${prefix}glitter4 text
├ ${prefix}glitter5 text
├ ${prefix}glitter6 text
├ ${prefix}glitter7 text
├ ${prefix}metale text
├ ${prefix}carbon text
├ ${prefix}candy text
├ ${prefix}metalb text
├ ${prefix}gemb text
├ ${prefix}3dchrome text
├ ${prefix}metalb2 text
├ ${prefix}metalg text
╰❒ ${prefix}metalg text


╭─❒ 「 Others 」
├ ${prefix}kalkulator
├ ${prefix}ttp [text]
╰❒ ${prefix}attp [text]

╭─❒ 「 TqTo 」 
╰❒ And All Support

    `
}

exports.rules = (prefix) => {
    return `
*── 「 REGRAS E FAQ 」 ──*

1. Não envie spam para mim. ️
(Spam significa enviar muitas mensagens sem sentido para mim)

Sanções: *❎ AVISO / SOFT BLOCK*

2. Não ligue para mim. ️
Sanções: *❎ BLOQUEIO SUAVE*

3. Não me explore.😖
Para ter acesso a mim nos seus Grupos Pague ou doe para apoiar a causa
Sanções: *BLOQUEIO PERMANENTE*

🗯️ O bot não está ou está lento para responder?
➡️ Pode ser afetado por rede, sinal, banido pelo Whatsapp e algum motivo. Continue obedecendo as regras‼️

🗯️ Como Posso comprar um bot?
➡️ Para adquirir um Bot fale com administrador e tenha acesso a eles.

🗯️ Posso adicionar ao grupo?
➡️ Por um tempo, o bot fica livre para adicionar status.

🗯️ Qual é o prefixo??
➡️ Este bot usa vários prefixos. Isso significa que você pode usar o prefixo #,. e outros prefixos razoáveis.



Se você entende as regras, digite *${prefix}allmenu* para aceder ao menu!

⚠️ Todas as políticas e disposições do Cosmos são mantidas pelo proprietário e todas as mudanças de política, a qualquer momento o proprietário tem o direito de revogar, bloquear usuários (* ﹏ *)

Muito obrigado! Para vocês, usuários amigáveis ​​e algumas pessoas que também ajudaram no projeto de confecção do Cosmos
😖🙏
`
}
exports.welcome = () =>{
	return`Por favor, leia a descrição primeiro 🤗
	
📛 Nome :
🔞 Idade :
🧑 Genero :
🏙️ Cidade :
╰ Siga as Regras do Grupo ~`
}
exports.leave = () =>{
	return`Parece que vc n gosta de ser Social 😣 Adeus >.<
Mtish`
}
exports.source = () =>{
return`*── 「 Codigo Fonte 」 ──*

DE MOMENTO O CODIGO FONTE PODE SER ADQUIRIDO APENAS COMPRANDO COM O ADMINISTRADOR
`
}
exports.tos = (ownernomer) => {
    return `
*── 「 DOAR 」 ──*

OI ☺️ 
Você pode me ajudar a manter este bot atualizado doando

Qualquer quantia da sua doação significará muito 👍

Thanks!

Para Doar Contacte o Admin:
wa.me/${ownernomer} (Proprietario)

    `
}

exports.ownermenu = (prefix) =>{
return`*Owner*
• < evaluate
• > evaluate
• $ exec
• => exec
• ${prefix}sendsesi
• ${prefix}join [link]
• ${prefix}self
• ${prefix}public [only bot]
• ${prefix}del [pesan bot]
• ${prefix}setppbot [reply image]
`}

exports.group = (prefix) =>{
	return`*Group* 
• ${prefix}revogar
• ${prefix}sair
• ${prefix}add [62***]
• ${prefix}remover @tag
• ${prefix}revogar
• ${prefix}sair
• ${prefix}linkgc
• ${prefix}grupo [abrir/fechar]
• ${prefix}tagall [text]
• ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`*Anime*
• ${prefix}quotesanime
• ${prefix}anime [query]
• ${prefix}manga [query]
• ${prefix}character [query]
`}

exports.search = (prefix) =>{
	return`*Search*
• ${prefix}ytsearch [query]
• ${prefix}film [query]
• ${prefix}wallpaper [query]
• ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`*Converter*
• ${prefix}stiker [reply image]
• ${prefix}tourl [image/video]
• ${prefix}togif [sticker]
• ${prefix}tomp4 [sticker]
• ${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`*Image Effect*
• ${prefix}wanted [reply image]
• ${prefix}utatoo [reply image]
• ${prefix}unsharpen [reply image]
• ${prefix}thanos [reply image]
• ${prefix}sniper [reply image]
• ${prefix}sharpen [reply image]
• ${prefix}sepia [reply image]
• ${prefix}scary [reply image]
• ${prefix}rip [reply image]
• ${prefix}redple [reply image]
• ${prefix}rejected [reply image]
• ${prefix}posterize [reply image]
• ${prefix}ps4 [reply image]
• ${prefix}pixelize [reply image]
• ${prefix}missionpassed [reply image]
• ${prefix}moustache [reply image]
• ${prefix}lookwhatkarenhave [reply image]
• ${prefix}jail [reply image]
• ${prefix}invert [reply image]
• ${prefix}instagram [reply image]
• ${prefix}greyscale [reply image]
• ${prefix}glitch [reply image]
• ${prefix}frame [reply image]
• ${prefix}fire [reply image]
• ${prefix}distort [reply image]
• ${prefix}dictator [reply image]
• ${prefix}deepfry [reply image]
• ${prefix}ddungeon [reply image]
• ${prefix}circle [reply image]
• ${prefix}challenger [reply image]
• ${prefix}burn [reply image]
• ${prefix}beautiful [reply image]
• ${prefix}jail [reply image]
• ${prefix}red [reply image]
• ${prefix}bloo [reply image]
• ${prefix}blue [reply image]
• ${prefix}sepia [reply image]
• ${prefix}green [reply image]
• ${prefix}glass [reply image]
• ${prefix}invert [reply image]
• ${prefix}blurple [reply image]
• ${prefix}blurple2 [reply image]
• ${prefix}wasted [reply image]
• ${prefix}passed [reply image]
• ${prefix}triggered [reply image]
• ${prefix}comrade [reply image]
• ${prefix}greyscale [reply image]
• ${prefix}threshold [reply image]
• ${prefix}brightness [reply image]
• ${prefix}invertgreyscale [reply image]
`
}

exports.download = (prefix) =>{
return`*Download*
• ${prefix}tiktok [link]
• ${prefix}tiktoknowm [link]
• ${prefix}tiktokwm [link]
• ${prefix}tiktokaudio [link]
• ${prefix}ytdl [link]
• ${prefix}play [query]
• ${prefix}ytmp3 [link]
• ${prefix}ytmp4 [link]
• ${prefix}facebook [link]
• ${prefix}facebooksd [link]
• ${prefix}facebookhd [link]
• ${prefix}fbaudio [link]
• ${prefix}igstory [username]
• ${prefix}igdl [link]
• ${prefix}igphoto [link]
• ${prefix}igvideo [link]
• ${prefix}igreels [link]
• ${prefix}igtv [link]
• ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`*Random Anime*
• ${prefix}indisponivel
• ${prefix}indisponivel
• ${prefix}indisponivel
• ${prefix}indisponivel
`
}

exports.textpro = (prefix) =>{
	return`*Textpro*
• ${prefix}halloween2 text|text2
• ${prefix}horror text|text2
• ${prefix}game8bit text|text2
• ${prefix}layered text|text2
• ${prefix}glitch2 text|text2
• ${prefix}coolg text|text2
• ${prefix}coolwg text|text2
• ${prefix}realistic text|text2
• ${prefix}space3d text|text2
• ${prefix}gtiktok text|text2
• ${prefix}stone text|text2
• ${prefix}marvel text|text2
• ${prefix}marvel2 text|text2
• ${prefix}avengers text|text2
• ${prefix}metalr text|text2
• ${prefix}metalg text|text2
• ${prefix}metalg2 text|text2
• ${prefix}halloween2 text|text2
• ${prefix}lion text|text2
• ${prefix}wolf_bw text|text2
• ${prefix}wolf_g text|text2
• ${prefix}ninja text|text2
• ${prefix}3dsteel text|text2
• ${prefix}horror2 text|text2
• ${prefix}lava text|text2
• ${prefix}bagel text|text2
• ${prefix}blackpink text
• ${prefix}rainbow2 text
• ${prefix}water_pipe text
• ${prefix}halloween text
• ${prefix}sketch text
• ${prefix}sircuit text
• ${prefix}discovery text
• ${prefix}metallic2 text
• ${prefix}fiction text
• ${prefix}demon text
• ${prefix}transformer text
• ${prefix}berry text
• ${prefix}thunder text
• ${prefix}magma text
• ${prefix}3dstone text
• ${prefix}neon text
• ${prefix}glitch text
• ${prefix}harry_potter text
• ${prefix}embossed text
• ${prefix}broken text
• ${prefix}papercut text
• ${prefix}gradient text
• ${prefix}glossy text
• ${prefix}watercolor text
• ${prefix}multicolor text
• ${prefix}neon_devil text
• ${prefix}underwater text
• ${prefix}bear text
• ${prefix}wonderfulg text
• ${prefix}christmas text
• ${prefix}neon_light text
• ${prefix}snow text
• ${prefix}cloudsky text
• ${prefix}luxury2 text
• ${prefix}gradient2 text
• ${prefix}summer text
• ${prefix}writing text
• ${prefix}engraved text
• ${prefix}summery text
• ${prefix}3dglue text
• ${prefix}metaldark text
• ${prefix}neonlight text
• ${prefix}oscar text
• ${prefix}minion text
• ${prefix}holographic text
• ${prefix}purple text
• ${prefix}glossyb text
• ${prefix}deluxe2 text
• ${prefix}glossyc text
• ${prefix}fabric text
• ${prefix}neonc text
• ${prefix}newyear text
• ${prefix}newyear2 text
• ${prefix}metals text
• ${prefix}xmas text
• ${prefix}blood text
• ${prefix}darkg text
• ${prefix}joker text
• ${prefix}wicker text
• ${prefix}natural text
• ${prefix}firework text
• ${prefix}skeleton text
• ${prefix}balloon text
• ${prefix}balloon2 text
• ${prefix}balloon3 text
• ${prefix}balloon4 text
• ${prefix}balloon5 text
• ${prefix}balloon6 text
• ${prefix}balloon7 text
• ${prefix}steel text
• ${prefix}gloss text
• ${prefix}denim text
• ${prefix}decorate text
• ${prefix}decorate2 text
• ${prefix}peridot text
• ${prefix}rock text
• ${prefix}glass text
• ${prefix}glass2 text
• ${prefix}glass3 text
• ${prefix}glass4 text
• ${prefix}glass5 text
• ${prefix}glass6 text
• ${prefix}glass7 text
• ${prefix}glass8 text
• ${prefix}captain_as2 text
• ${prefix}robot text
• ${prefix}equalizer text
• ${prefix}toxic text
• ${prefix}sparkling text
• ${prefix}sparkling2 text
• ${prefix}sparkling3 text
• ${prefix}sparkling4 text
• ${prefix}sparkling5 text
• ${prefix}sparkling6 text
• ${prefix}sparkling7 text
• ${prefix}decorative text
• ${prefix}chocolate text
• ${prefix}strawberry text
• ${prefix}koifish text
• ${prefix}bread text
• ${prefix}matrix text
• ${prefix}blood2 text
• ${prefix}neonligth2 text
• ${prefix}thunder2 text
• ${prefix}3dbox text
• ${prefix}neon2 text
• ${prefix}roadw text
• ${prefix}bokeh text
• ${prefix}gneon text
• ${prefix}advanced text
• ${prefix}dropwater text
• ${prefix}wall text
• ${prefix}chrismast text
• ${prefix}honey text
• ${prefix}drug text
• ${prefix}marble text
• ${prefix}marble2 text
• ${prefix}ice text
• ${prefix}juice text
• ${prefix}rusty text
• ${prefix}abstra text
• ${prefix}biscuit text
• ${prefix}wood text
• ${prefix}scifi text
• ${prefix}metalr text
• ${prefix}purpleg text
• ${prefix}shiny text 
• ${prefix}jewelry text
• ${prefix}jewelry2 text
• ${prefix}jewelry3 text
• ${prefix}jewelry4 text
• ${prefix}jewelry5 text
• ${prefix}jewelry6 text
• ${prefix}jewelry7 text
• ${prefix}jewelry8 text
• ${prefix}metalh text
• ${prefix}golden text
• ${prefix}glitter text
• ${prefix}glitter2 text
• ${prefix}glitter3 text
• ${prefix}glitter4 text
• ${prefix}glitter5 text
• ${prefix}glitter6 text
• ${prefix}glitter7 text
• ${prefix}metale text
• ${prefix}carbon text
• ${prefix}candy text
• ${prefix}metalb text
• ${prefix}gemb text
• ${prefix}3dchrome text
• ${prefix}metalb2 text
• ${prefix}metalg text
• ${prefix}metalg text
`
}

exports.other = (prefix) =>{
return`*Outros*
• ${prefix}kalkulator
• ${prefix}ttp [text]
• ${prefix}attp [text]
`
}

exports.tqto = () =>{
	return`*Thanks To*
• WORKX
• And All Support
`
}
