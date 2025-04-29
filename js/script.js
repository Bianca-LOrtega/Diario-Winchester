function form() {
    alert('Muito Obrigada pela colaboração, seus dados foram para o banco')
}

const personagens = [`<div class="card">
        <img src="../img/ash.jpg" alt="Ash">
        <h3>Ash</h3>
        <strong class="tag-humano">Caçador</strong>
        <p>Ash é um gênio excêntrico e hacker que trabalha no Roadhouse. Com seu visual "mullet" e conhecimento de informática, ele ajuda os Winchester com pesquisas sobrenaturais. <strong>1ª aparição: 11º episódio da 2ª temporada ("Playthings")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/bobby.jpg" alt="Bobby Singer">
        <h3>Bobby Singer</h3>
        <strong class="tag-humano">Caçador</strong>
        <p>Bobby é uma figura paterna para Sam e Dean, um caçador veterano e sábio. Seu conhecimento de ocultismo é essencial nas batalhas contra criaturas sombrias. <strong>1ª aparição: 22º episódio da 1ª temporada ("Devil's Trap")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/charlie.jpg" alt="Charlie Bradbury">
        <h3>Charlie Bradbury</h3>
        <strong class="tag-humano">Caçadora</strong>
        <p>Charlie é uma hacker brilhante e uma das aliadas mais queridas dos Winchester. Nerd assumida, sua inteligência e coragem se destacam mesmo sem treinamento formal. <strong>1ª aparição: 20º episódio da 7ª temporada ("The Girl with the Dungeons and Dragons Tattoo")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/claire.jpg" alt="Claire Novak">
        <h3>Claire Novak</h3>
        <strong class="tag-humano">Caçadora</strong>
        <p>Filha do hospedeiro original de Castiel, Claire cresceu no meio do caos sobrenatural. Determinada e rebelde, ela abraça a vida de caçadora para encontrar seu próprio caminho. <strong>1ª aparição: 20º episódio da 4ª temporada ("The Rapture")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/dean.jpg" alt="Dean Winchester">
        <h3>Dean Winchester</h3>
        <strong class="tag-humano">Caçador</strong>
        <p>Dean é o irmão mais velho, marcado por uma personalidade corajosa, sarcástica e profundamente leal à família. O Impala, o rock clássico e a comida simples são símbolos de seu espírito. <strong>1ª aparição: 1º episódio da 1ª temporada ("Pilot")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/ellen.jpg" alt="Ellen Harvelle">
        <h3>Ellen Harvelle</h3>
        <strong class="tag-humano">Caçadora</strong>
        <p>Ellen é uma caçadora forte e determinada que administra o bar "The Roadhouse". Sua coragem e senso de proteção fazem dela uma aliada valiosa. <strong>1ª aparição: 2º episódio da 2ª temporada ("Everybody Loves a Clown")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/eileen.jpg" alt="Eileen Leahy">
        <h3>Eileen Leahy</h3>
        <strong class="tag-humano">Caçadora</strong>
        <p>Eileen é uma caçadora surda da família Leahy, que se alia a Sam e Dean. Sua habilidade e resiliência quebram estereótipos. <strong>1ª aparição: 11º episódio da 11ª temporada ("Into the Mystic")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/garth.jpg" alt="Garth Fitzgerald IV">
        <h3>Garth Fitzgerald IV</h3>
        <strong class="tag-humano">Caçador</strong>
        <p>Garth é um caçador atrapalhado mas bem-intencionado, que eventualmente se torna um lobisomem "do bem". Sua personalidade otimista traz alívio cômico. <strong>1ª aparição: 8º episódio da 7ª temporada ("Season Seven, Time for a Wedding!")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/jo.jpg" alt="Jo Harvelle">
        <h3>Jo Harvelle</h3>
        <strong class="tag-humano">Caçadora</strong>
        <p>Jo é filha de Ellen Harvelle, uma jovem caçadora que busca provar seu valor no mundo dominado por homens. Destemida e impulsiva, ela sonha com grandes feitos. <strong>1ª aparição: 2º episódio da 2ª temporada ("Everybody Loves a Clown")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/rufus.jpg" alt="Rufus Turner">
        <h3>Rufus Turner</h3>
        <strong class="tag-humano">Caçador</strong>
        <p>Rufus é um caçador veterano e parceiro de Bobby Singer. Cínico e direto, ele desconfia de quase tudo, mas sua experiência é inestimável. <strong>1ª aparição: 13º episódio da 3ª temporada ("Ghostfacers")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/sam.jpg" alt="Sam Winchester">
        <h3>Sam Winchester</h3>
        <strong class="tag-humano">Caçador</strong>
        <p>Sam é o irmão mais novo da família Winchester, conhecido por sua inteligência, empatia e forte senso moral. Sua compaixão o torna essencial para a esperança e redenção. <strong>1ª aparição: 1º episódio da 1ª temporada ("Pilot")</strong></p>
    </div>`, 
    `<div class="card">
    <img src="../img/gabriel.jpg" alt="Gabriel">
    <h3>Gabriel</h3>
    <strong class="tag-anjo">Arcanjo</strong>
    <p>Gabriel, o "Trickster", é um arcanjo que se esconde na Terra pregando peças. Cansado da guerra celestial, ele revela coragem ao ajudar os Winchester. <strong>1ª aparição: 15º episódio da 2ª temporada ("Tall Tales")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/castiel.jpg" alt="Castiel">
    <h3>Castiel</h3>
    <strong class="tag-anjo">Anjo</strong>
    <p>Castiel é um anjo do Senhor que desenvolve um laço profundo com os irmãos Winchester. Sua jornada é marcada pela descoberta da humanidade e questionamento das ordens divinas. <strong>1ª aparição: 1º episódio da 4ª temporada ("Lazarus Rising")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/raphael.jpg" alt="Raphael">
    <h3>Raphael</h3>
    <strong class="tag-anjo">Arcanjo</strong>
    <p>Raphael é um arcanjo rígido, determinado a restaurar o Apocalipse. Sua visão inflexível o torna um antagonista implacável. <strong>1ª aparição: 19º episódio da 4ª temporada ("Jump the Shark")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/anna.jpg" alt="Anna Milton">
    <h3>Anna Milton</h3>
    <strong class="tag-anjo">Anjo</strong>
    <p>Anna é uma anja que escolheu abandonar sua graça para viver como humana. Sua jornada explora a dualidade entre dever celestial e amor pela liberdade. <strong>1ª aparição: 7º episódio da 4ª temporada ("It's the Great Pumpkin, Sam Winchester")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/lucifer.jpg" alt="Lúcifer">
    <h3>Lúcifer</h3>
    <strong class="tag-anjo">Anjo Caído</strong>
    <p>Lúcifer é o primeiro anjo a se rebelar contra Deus, personificando o orgulho e a dor da rejeição. Sua complexidade o torna um dos vilões mais memoráveis. <strong>1ª aparição: 1º episódio da 5ª temporada ("Sympathy for the Devil")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/zachariah.jpg" alt="Zachariah">
    <h3>Zachariah</h3>
    <strong class="tag-anjo">Anjo</strong>
    <p>Zachariah é um anjo fanático que manipula os Winchester para cumprir o Apocalipse. Sua arrogância e crueldade são marcantes. <strong>1ª aparição: 18º episódio da 4ª temporada ("The Monster at the End of This Book")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/michael.jpg" alt="Michael">
    <h3>Michael</h3>
    <strong class="tag-anjo">Arcanjo</strong>
    <p>Michael é o arcanjo líder das hostes celestiais, defensor ferrenho das ordens divinas. Sua rigidez o coloca em conflito com o livre-arbítrio. <strong>1ª aparição: 13º episódio da 5ª temporada ("The Song Remains the Same")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/hannah.jpg" alt="Hannah">
    <h3>Hannah</h3>
    <strong class="tag-anjo">Anjo</strong>
    <p>Hannah é uma anja leal ao Céu que desenvolve um vínculo com Castiel. Sua história explora conflitos entre dever e empatia. <strong>1ª aparição: 2º episódio da 10ª temporada ("Reichenbach")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/balthazar.jpg" alt="Balthazar">
    <h3>Balthazar</h3>
    <strong class="tag-anjo">Anjo</strong>
    <p>Balthazar é um anjo rebelde e sarcástico, conhecido por seu amor por luxo e trapaças. Ajuda Castiel e os Winchester em momentos cruciais. <strong>1ª aparição: 3º episódio da 6ª temporada ("The Third Man")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/uriel.jpg" alt="Uriel">
    <h3>Uriel</h3>
    <strong class="tag-anjo">Anjo</strong>
    <p>Uriel é um anjo cruel e obediente às hierarquias celestiais. Sua falta de compaixão o torna um executor temido. <strong>1ª aparição: 2º episódio da 4ª temporada ("Are You There, God? It's Me, Dean Winchester")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/joshua.jpg" alt="Joshua">
    <h3>Joshua</h3>
    <strong class="tag-anjo">Anjo</strong>
    <p>Joshua é o anjo que se comunica diretamente com Deus, representando sabedoria e paz. Sua figura é uma das poucas vozes divinas genuínas. <strong>1ª aparição: 18º episódio da 5ª temporada ("Point of No Return")</strong></p>
</div>`, 
`<div class="card">
        <img src="../img/crowley.jpg" alt="Crowley">
        <h3>Crowley</h3>
        <strong class="tag-demônio">Rei do Inferno</strong>
        <p>Crowley, o astuto Rei do Inferno, mistura sarcasmo britânico com uma sede implacável de poder. Sua relação amor-ódio com os Winchester é lendária. <strong>1ª aparição: 22º episódio da 5ª temporada ("Swan Song")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/ruby.jpg" alt="Ruby">
        <h3>Ruby</h3>
        <strong class="tag-demônio">Demônio</strong>
        <p>Ruby é uma demônia que manipula Sam com promessas de poder, usando uma lâmina demoníaca única. Sua lealdade sempre permanece questionável. <strong>1ª aparição: 4º episódio da 3ª temporada ("Sin City")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/alastair.jpg" alt="Alastair">
        <h3>Alastair</h3>
        <strong class="tag-demônio">Demônio Torturador</strong>
        <p>Alastair é o mestre da tortura no Inferno, responsável por quebrar Dean durante sua estada. Sua voz calma esconde uma crueldade sem limites. <strong>1ª aparição: 16º episódio da 4ª temporada ("On the Head of a Pin")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/azazel.jpg" alt="Azazel">
        <h3>Azazel</h3>
        <strong class="tag-demônio">Demônio dos Olhos Amarelos</strong>
        <p>O vilão que começou tudo. Azazel é responsável pela morte de Mary Winchester e pelo plano de libertar Lúcifer. <strong>1ª aparição: 22º episódio da 1ª temporada ("Devil's Trap")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/meg.jpg" alt="Meg Masters">
        <h3>Meg Masters</h3>
        <strong class="tag-demônio">Demônio</strong>
        <p>Meg começa como uma antagonista cruel, mas desenvolve uma relação complexa com Castiel, mostrando nuances no mundo demoníaco. <strong>1ª aparição: 12º episódio da 1ª temporada ("Faith")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/abaddon.jpg" alt="Abaddon">
        <h3>Abaddon</h3>
        <strong class="tag-demônio">Cavaleira do Inferno</strong>
        <p>Abaddon é uma das Cavaleiras originais do Inferno, que retorna na era moderna para desafiar Crowley e os Winchester. <strong>1ª aparição: 17º episódio da 8ª temporada ("Goodbye Stranger")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/ramiel.jpg" alt="Ramiel">
        <h3>Ramiel</h3>
        <strong class="tag-demônio">Príncipe do Inferno</strong>
        <p>Ramiel é um dos príncipes demoníacos, preferindo solidão e jogos de tabuleiro ao caos infernal. Sua calma é mais assustadora que gritos. <strong>1ª aparição: 13º episódio da 12ª temporada ("Family Feud")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/lilith.jpg" alt="Lilith">
        <h3>Lilith</h3>
        <strong class="tag-demônio">Primeira Demônia</strong>
        <p>Lilith é a primeira criatura demoníaca e o último selo para o Apocalipse. Sua aparência infantil contrasta com sua natureza maligna. <strong>1ª aparição: 9º episódio da 3ª temporada ("Malleus Maleficarum")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/cain.jpg" alt="Caim">
        <h3>Caim</h3>
        <strong class="tag-divino">Portador da Marca</strong>
        <p>O bíblico Caim, portador da primeira marca de Caim e criador dos Cavaleiros do Inferno. Dean herda seu legado sangrento. <strong>1ª aparição: 11º episódio da 9ª temporada ("First Born")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/samhain.jpg" alt="Samhain">
        <h3>Samhain</h3>
        <strong class="tag-demônio">Demônio Especial</strong>
        <p>Samhain é um demônio único capaz de ressuscitar os mortos e controlar criaturas sobrenaturais. Um dos selos do Apocalipse. <strong>1ª aparição: 7º episódio da 4ª temporada ("It's the Great Pumpkin, Sam Winchester")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/rowena.jpg" alt="Rowena MacLeod">
        <h3>Rowena MacLeod</h3>
        <strong class="tag-bruxa">Bruxa</strong>
        <p>Rowena é a bruxa escocesa mais poderosa da série, mãe de Crowley e aliada eventual dos Winchester. Seu charme e inteligência são tão afiados quanto seu senso de moda. <strong>1ª aparição: 18º episódio da 10ª temporada ("Book of the Damned")</strong></p>
    </div>`, 
    `<div class="card">
        <img src="../img/death.jpg" alt="Morte">
        <h3>Morte</h3>
        <strong class="tag-divino">Entidade Primordial</strong>
        <p>Um dos seres mais antigos do universo, personificação da morte. Elegante, filosófico e imensamente poderoso, carrega uma foice que pode matar qualquer coisa. <strong>1ª aparição: 21º episódio da 5ª temporada ("Two Minutes to Midnight")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/chuck.jpg" alt="Chuck Shurley">
        <h3>Chuck Shurley</h3>
        <strong class="tag-divino">Deus</strong>
        <p>Inicialmente apresentado como um profeta escrevendo os livros "Supernatural", é revelado como o próprio Deus. Complexo e às vezes infantil, sua relação com a criação é conturbada. <strong>1ª aparição como Deus: 18º episódio da 5ª temporada ("Point of No Return")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/amara.jpg" alt="Amara">
        <h3>Amara</h3>
        <strong class="tag-divino">A Escuridão</strong>
        <p>A irmã mais velha de Deus e personificação da Escuridão primordial. Seu poder rivaliza com o do Criador, representando o vazio e a destruição. <strong>1ª aparição: 1º episódio da 11ª temporada ("Out of the Darkness, Into the Fire")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/billie.jpg" alt="Billie">
        <h3>Billie</h3>
        <strong class="tag-divino">Morte</strong>
        <p>Ceifadora que assume o cargo de Morte após a morte do anterior. Direta e impessoal, representa a inevitabilidade do fim. <strong>1ª aparição: 9º episódio da 11ª temporada ("O Brother Where Art Thou")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/metatron.jpg" alt="Metatron">
        <h3>Metatron</h3>
        <strong class="tag-divino">Escriba de Deus</strong>
        <p>O escriba celestial que registra as palavras de Deus. Egocêntrico e manipulador, chega a usurpar o lugar de Deus no Céu. <strong>1ª aparição: 20º episódio da 8ª temporada ("Pac-Man Fever")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/joshua.jpg" alt="Joshua">
        <h3>Joshua</h3>
        <strong class="tag-divino">Anjo</strong>
        <p>O único anjo que ainda se comunica diretamente com Deus. Sábio e pacífico, cultiva um jardim no Céu. <strong>1ª aparição: 18º episódio da 5ª temporada ("Point of No Return")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/empty.jpg" alt="O Vazio">
        <h3>O Vazio</h3>
        <strong class="tag-divino">Entidade</strong>
        <p>Personificação do lugar onde anjos e demônios vão após a morte final. Aparece como uma figura sombria e perturbadora. <strong>1ª aparição: 3º episódio da 13ª temporada ("Patience")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/sombra.jpg" alt="A Sombra">
        <h3>A Sombra</h3>
        <strong class="tag-divino">Entidade</strong>
        <p>Ser cósmico que habita o Vazio e odeia ser perturbada. Considerada uma das forças mais antigas e poderosas. <strong>1ª aparição: 23º episódio da 12ª temporada ("All Along the Watchtower")</strong></p>
    </div>`, 
    `<div class="card">
    <img src="../img/leviathan.jpg" alt="Leviatã">
    <h3>Leviatã</h3>
    <strong class="tag-monstro">Criatura Primordial</strong>
    <p>Criaturas antigas e vorazes que se alimentam de humanos. São quase indestrutíveis e liderados por Dick Roman. <strong>1ª aparição: 10º episódio da 7ª temporada ("Death's Door")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/wendigo.jpg" alt="Wendigo">
    <h3>Wendigo</h3>
    <strong class="tag-monstro">Monstro</strong>
    <p>Criatura canibal que habita florestas remotas. Extremamente rápida e forte, com garras afiadas. <strong>1ª aparição: 2º episódio da 1ª temporada ("Wendigo")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/alpha-vampire.jpg" alt="Alpha Vampiro">
    <h3>Alpha Vampiro</h3>
    <strong class="tag-monstro">Original</strong>
    <p>O primeiro vampiro, criado por Eve. Inteligente, poderoso e líder de todos os vampiros. <strong>1ª aparição: 3º episódio da 6ª temporada ("The Third Man")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/jefferson.jpg" alt="Jefferson Starships">
    <h3>Jefferson Starships</h3>
    <strong class="tag-monstro">Monstro Híbrido</strong>
    <p>Monstros criados por Eve combinando características de várias criaturas. Receberam esse nome por Dean. <strong>1ª aparição: 19º episódio da 6ª temporada ("Mommy Dearest")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/ghoul.jpg" alt="Ghoul">
    <h3>Ghoul</h3>
    <strong class="tag-monstro">Monstro</strong>
    <p>Criaturas necrófagas que se disfarçam de suas vítimas. Vivem em cemitérios e catacumbas. <strong>1ª aparição: 6º episódio da 1ª temporada ("Skin")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/shapeshifter.jpg" alt="Metamorfo">
    <h3>Metamorfo</h3>
    <strong class="tag-monstro">Monstro</strong>
    <p>Pode assumir a forma de qualquer pessoa que tocar. Um dos inimigos mais traiçoeiros dos Winchester. <strong>1ª aparição: 6º episódio da 1ª temporada ("Skin")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/rukus.jpg" alt="Rakshasa">
    <h3>Rakshasa</h3>
    <strong class="tag-monstro">Demônio Hindu</strong>
    <p>Criatura da mitologia hindu que se alimenta de pesadelos humanos. Aparece como um homem com cabeça de tigre. <strong>1ª aparição: 11º episódio da 7ª temporada ("Adventures in Babysitting")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/shtriga.jpg" alt="Shtriga">
    <h3>Shtriga</h3>
    <strong class="tag-monstro">Bruxa Vampírica</strong>
    <p>Bruxa da mitologia albanesa que drena a força vital das crianças. Uma das primeiras caçadas de John Winchester. <strong>1ª aparição: 17º episódio da 1ª temporada ("Hell House")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/djinn.jpg" alt="Djinn">
    <h3>Djinn</h3>
    <strong class="tag-monstro">Gênio</strong>
    <p>Criaturas que prendem vítimas em sonhos ilusórios enquanto se alimentam de seu sangue. <strong>1ª aparição: 20º episódio da 2ª temporada ("What Is and What Should Never Be")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/rawhead.jpg" alt="Rawhead">
    <h3>Rawhead</h3>
    <strong class="tag-monstro">Monstro</strong>
    <p>Monstro inglês que habita esgotos e ataca crianças. Extremamente resistente e violento. <strong>1ª aparição: 6º episódio da 1ª temporada ("Skin")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/kitsune.jpg" alt="Kitsune">
    <h3>Kitsune</h3>
    <strong class="tag-monstro">Raposa Sobrenatural</strong>
    <p>Espírito de raposa da mitologia japonesa que se alimenta de glândulas pineais humanas. <strong>1ª aparição: 13º episódio da 6ª temporada ("Unforgiven")</strong></p>
</div>`,  `<div class="card">
<img src="../img/jody.jpg" alt="Jody Mills">
<h3>Jody Mills</h3>
<strong class="tag-humano">Xerife</strong>
<p>Xerife corajosa que se torna uma das aliadas mais confiáveis dos Winchester e figura materna para Claire e outras jovens caçadoras. <strong>1ª aparição: 7º episódio da 5ª temporada ("The Curious Case of Dean Winchester")</strong></p>
</div>`,
`<div class="card">
<img src="../img/kevin.jpg" alt="Kevin Tran">
<h3>Kevin Tran</h3>
<strong class="tag-humano">Profeta</strong>
<p>Estudante brilhante transformado em profeta de Deus, forçado a decifrar as Tábuas dos Anjos. Sua história é uma das mais trágicas. <strong>1ª aparição: 20º episódio da 7ª temporada ("The Girl with the Dungeons and Dragons Tattoo")</strong></p>
</div>`,
`<div class="card">
<img src="../img/donna.jpg" alt="Donna Hanscum">
<h3>Donna Hanscum</h3>
<strong class="tag-humano">Xerife</strong>
<p>Xerife de Minnesota com sotaque marcante e coração enorme. Uma das aliadas mais otimistas e leais dos Winchesters. <strong>1ª aparição: 8º episódio da 10ª temporada ("Hibbing 911")</strong></p>
</div>`,
`<div class="card">
<img src="../img/becky.jpg" alt="Becky Rosen">
<h3>Becky Rosen</h3>
<strong class="tag-humano">Fã</strong>
<p>Fã obcecada pelos livros de Chuck Shurley sobre os Winchester. Mostra o lado bizarro da fama dos irmãos. <strong>1ª aparição: 5º episódio da 5ª temporada ("Fan Fiction")</strong></p>
</div>`,
`<div class="card">
<img src="../img/linda.jpg" alt="Linda Tran">
<h3>Linda Tran</h3>
<strong class="tag-humano">Mãe</strong>
<p>Mãe de Kevin Tran, que enfrenta o mundo sobrenatural para proteger seu filho. Uma das personagens humanas mais corajosas. <strong>1ª aparição: 20º episódio da 7ª temporada ("The Girl with the Dungeons and Dragons Tattoo")</strong></p>
</div>`,
`<div class="card">
<img src="../img/eileen.jpg" alt="Eileen Leahy">
<h3>Eileen Leahy</h3>
<strong class="tag-humano">Caçadora</strong>
<p>Caçadora surda da família Leahy, que desenvolve uma conexão especial com Sam. Representação importante de diversidade. <strong>1ª aparição: 11º episódio da 11ª temporada ("Into the Mystic")</strong></p>
</div>`,
`<div class="card">
<img src="../img/missouri.jpg" alt="Missouri Moseley">
<h3>Missouri Moseley</h3>
<strong class="tag-humano">Médium</strong>
<p>Médium que ajudou a família Winchester no passado. Uma das primeiras conexões sobrenaturais de John após a morte de Mary. <strong>1ª aparição: 11º episódio da 1ª temporada ("Scarecrow")</strong></p>
</div>`,
`<div class="card">
<img src="../img/garth.jpg" alt="Garth Fitzgerald IV">
<h3>Garth Fitzgerald IV</h3>
<strong class="tag-humano">Caçador</strong>
<p>Caçador atrapalhado mas de bom coração que eventualmente se torna um lobisomem "do bem". Fornece alívio cômico. <strong>1ª aparição: 8º episódio da 7ª temporada ("Season Seven, Time for a Wedding!")</strong></p>
</div>`,
`<div class="card">
<img src="../img/patience.jpg" alt="Patience Turner">
<h3>Patience Turner</h3>
<strong class="tag-humano">Médium</strong>
<p>Neta de Missouri Moseley que herda seus poderes psíquicos. Mostra o legado das famílias ligadas aos Winchester. <strong>1ª aparição: 3º episódio da 13ª temporada ("Patience")</strong></p>
</div>`,
`<div class="card">
<img src="../img/wayne.jpg" alt="Wayne">
<h3>Wayne</h3>
<strong class="tag-humano">Caçador Aposentado</strong>
<p>Caçador veterano que aparece no episódio "Weekend at Bobby's". Mostra a rede de apoio por trás dos Winchesters. <strong>1ª aparição: 4º episódio da 6ª temporada ("Weekend at Bobby's")</strong></p>
</div>`

]
const cacadores = [`<div class="card">
        <img src="../img/ash.jpg" alt="Ash">
        <h3>Ash</h3>
        <strong class="tag-humano">Caçador</strong>
        <p>Ash é um gênio excêntrico e hacker que trabalha no Roadhouse. Com seu visual "mullet" e conhecimento de informática, ele ajuda os Winchester com pesquisas sobrenaturais. <strong>1ª aparição: 11º episódio da 2ª temporada ("Playthings")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/bobby.jpg" alt="Bobby Singer">
        <h3>Bobby Singer</h3>
        <strong class="tag-humano">Caçador</strong>
        <p>Bobby é uma figura paterna para Sam e Dean, um caçador veterano e sábio. Seu conhecimento de ocultismo é essencial nas batalhas contra criaturas sombrias. <strong>1ª aparição: 22º episódio da 1ª temporada ("Devil's Trap")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/charlie.jpg" alt="Charlie Bradbury">
        <h3>Charlie Bradbury</h3>
        <strong class="tag-humano">Caçadora</strong>
        <p>Charlie é uma hacker brilhante e uma das aliadas mais queridas dos Winchester. Nerd assumida, sua inteligência e coragem se destacam mesmo sem treinamento formal. <strong>1ª aparição: 20º episódio da 7ª temporada ("The Girl with the Dungeons and Dragons Tattoo")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/claire.jpg" alt="Claire Novak">
        <h3>Claire Novak</h3>
        <strong class="tag-humano">Caçadora</strong>
        <p>Filha do hospedeiro original de Castiel, Claire cresceu no meio do caos sobrenatural. Determinada e rebelde, ela abraça a vida de caçadora para encontrar seu próprio caminho. <strong>1ª aparição: 20º episódio da 4ª temporada ("The Rapture")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/dean.jpg" alt="Dean Winchester">
        <h3>Dean Winchester</h3>
        <strong class="tag-humano">Caçador</strong>
        <p>Dean é o irmão mais velho, marcado por uma personalidade corajosa, sarcástica e profundamente leal à família. O Impala, o rock clássico e a comida simples são símbolos de seu espírito. <strong>1ª aparição: 1º episódio da 1ª temporada ("Pilot")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/ellen.jpg" alt="Ellen Harvelle">
        <h3>Ellen Harvelle</h3>
        <strong class="tag-humano">Caçadora</strong>
        <p>Ellen é uma caçadora forte e determinada que administra o bar "The Roadhouse". Sua coragem e senso de proteção fazem dela uma aliada valiosa. <strong>1ª aparição: 2º episódio da 2ª temporada ("Everybody Loves a Clown")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/eileen.jpg" alt="Eileen Leahy">
        <h3>Eileen Leahy</h3>
        <strong class="tag-humano">Caçadora</strong>
        <p>Eileen é uma caçadora surda da família Leahy, que se alia a Sam e Dean. Sua habilidade e resiliência quebram estereótipos. <strong>1ª aparição: 11º episódio da 11ª temporada ("Into the Mystic")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/garth.jpg" alt="Garth Fitzgerald IV">
        <h3>Garth Fitzgerald IV</h3>
        <strong class="tag-humano">Caçador</strong>
        <p>Garth é um caçador atrapalhado mas bem-intencionado, que eventualmente se torna um lobisomem "do bem". Sua personalidade otimista traz alívio cômico. <strong>1ª aparição: 8º episódio da 7ª temporada ("Season Seven, Time for a Wedding!")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/jo.jpg" alt="Jo Harvelle">
        <h3>Jo Harvelle</h3>
        <strong class="tag-humano">Caçadora</strong>
        <p>Jo é filha de Ellen Harvelle, uma jovem caçadora que busca provar seu valor no mundo dominado por homens. Destemida e impulsiva, ela sonha com grandes feitos. <strong>1ª aparição: 2º episódio da 2ª temporada ("Everybody Loves a Clown")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/rufus.jpg" alt="Rufus Turner">
        <h3>Rufus Turner</h3>
        <strong class="tag-humano">Caçador</strong>
        <p>Rufus é um caçador veterano e parceiro de Bobby Singer. Cínico e direto, ele desconfia de quase tudo, mas sua experiência é inestimável. <strong>1ª aparição: 13º episódio da 3ª temporada ("Ghostfacers")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/sam.jpg" alt="Sam Winchester">
        <h3>Sam Winchester</h3>
        <strong class="tag-humano">Caçador</strong>
        <p>Sam é o irmão mais novo da família Winchester, conhecido por sua inteligência, empatia e forte senso moral. Sua compaixão o torna essencial para a esperança e redenção. <strong>1ª aparição: 1º episódio da 1ª temporada ("Pilot")</strong></p>
    </div>`
            ]

const anjos = [ `<div class="card">
    <img src="../img/gabriel.jpg" alt="Gabriel">
    <h3>Gabriel</h3>
    <strong class="tag-anjo">Arcanjo</strong>
    <p>Gabriel, o "Trickster", é um arcanjo que se esconde na Terra pregando peças. Cansado da guerra celestial, ele revela coragem ao ajudar os Winchester. <strong>1ª aparição: 15º episódio da 2ª temporada ("Tall Tales")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/castiel.jpg" alt="Castiel">
    <h3>Castiel</h3>
    <strong class="tag-anjo">Anjo</strong>
    <p>Castiel é um anjo do Senhor que desenvolve um laço profundo com os irmãos Winchester. Sua jornada é marcada pela descoberta da humanidade e questionamento das ordens divinas. <strong>1ª aparição: 1º episódio da 4ª temporada ("Lazarus Rising")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/raphael.jpg" alt="Raphael">
    <h3>Raphael</h3>
    <strong class="tag-anjo">Arcanjo</strong>
    <p>Raphael é um arcanjo rígido, determinado a restaurar o Apocalipse. Sua visão inflexível o torna um antagonista implacável. <strong>1ª aparição: 19º episódio da 4ª temporada ("Jump the Shark")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/anna.jpg" alt="Anna Milton">
    <h3>Anna Milton</h3>
    <strong class="tag-anjo">Anjo</strong>
    <p>Anna é uma anja que escolheu abandonar sua graça para viver como humana. Sua jornada explora a dualidade entre dever celestial e amor pela liberdade. <strong>1ª aparição: 7º episódio da 4ª temporada ("It's the Great Pumpkin, Sam Winchester")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/lucifer.jpg" alt="Lúcifer">
    <h3>Lúcifer</h3>
    <strong class="tag-anjo">Anjo Caído</strong>
    <p>Lúcifer é o primeiro anjo a se rebelar contra Deus, personificando o orgulho e a dor da rejeição. Sua complexidade o torna um dos vilões mais memoráveis. <strong>1ª aparição: 1º episódio da 5ª temporada ("Sympathy for the Devil")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/zachariah.jpg" alt="Zachariah">
    <h3>Zachariah</h3>
    <strong class="tag-anjo">Anjo</strong>
    <p>Zachariah é um anjo fanático que manipula os Winchester para cumprir o Apocalipse. Sua arrogância e crueldade são marcantes. <strong>1ª aparição: 18º episódio da 4ª temporada ("The Monster at the End of This Book")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/michael.jpg" alt="Michael">
    <h3>Michael</h3>
    <strong class="tag-anjo">Arcanjo</strong>
    <p>Michael é o arcanjo líder das hostes celestiais, defensor ferrenho das ordens divinas. Sua rigidez o coloca em conflito com o livre-arbítrio. <strong>1ª aparição: 13º episódio da 5ª temporada ("The Song Remains the Same")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/hannah.jpg" alt="Hannah">
    <h3>Hannah</h3>
    <strong class="tag-anjo">Anjo</strong>
    <p>Hannah é uma anja leal ao Céu que desenvolve um vínculo com Castiel. Sua história explora conflitos entre dever e empatia. <strong>1ª aparição: 2º episódio da 10ª temporada ("Reichenbach")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/balthazar.jpg" alt="Balthazar">
    <h3>Balthazar</h3>
    <strong class="tag-anjo">Anjo</strong>
    <p>Balthazar é um anjo rebelde e sarcástico, conhecido por seu amor por luxo e trapaças. Ajuda Castiel e os Winchester em momentos cruciais. <strong>1ª aparição: 3º episódio da 6ª temporada ("The Third Man")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/uriel.jpg" alt="Uriel">
    <h3>Uriel</h3>
    <strong class="tag-anjo">Anjo</strong>
    <p>Uriel é um anjo cruel e obediente às hierarquias celestiais. Sua falta de compaixão o torna um executor temido. <strong>1ª aparição: 2º episódio da 4ª temporada ("Are You There, God? It's Me, Dean Winchester")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/joshua.jpg" alt="Joshua">
    <h3>Joshua</h3>
    <strong class="tag-anjo">Anjo</strong>
    <p>Joshua é o anjo que se comunica diretamente com Deus, representando sabedoria e paz. Sua figura é uma das poucas vozes divinas genuínas. <strong>1ª aparição: 18º episódio da 5ª temporada ("Point of No Return")</strong></p>
</div>`

]

const demonio = [ `<div class="card">
        <img src="../img/crowley.jpg" alt="Crowley">
        <h3>Crowley</h3>
        <strong class="tag-demônio">Rei do Inferno</strong>
        <p>Crowley, o astuto Rei do Inferno, mistura sarcasmo britânico com uma sede implacável de poder. Sua relação amor-ódio com os Winchester é lendária. <strong>1ª aparição: 22º episódio da 5ª temporada ("Swan Song")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/ruby.jpg" alt="Ruby">
        <h3>Ruby</h3>
        <strong class="tag-demônio">Demônio</strong>
        <p>Ruby é uma demônia que manipula Sam com promessas de poder, usando uma lâmina demoníaca única. Sua lealdade sempre permanece questionável. <strong>1ª aparição: 4º episódio da 3ª temporada ("Sin City")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/alastair.jpg" alt="Alastair">
        <h3>Alastair</h3>
        <strong class="tag-demônio">Demônio Torturador</strong>
        <p>Alastair é o mestre da tortura no Inferno, responsável por quebrar Dean durante sua estada. Sua voz calma esconde uma crueldade sem limites. <strong>1ª aparição: 16º episódio da 4ª temporada ("On the Head of a Pin")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/azazel.jpg" alt="Azazel">
        <h3>Azazel</h3>
        <strong class="tag-demônio">Demônio dos Olhos Amarelos</strong>
        <p>O vilão que começou tudo. Azazel é responsável pela morte de Mary Winchester e pelo plano de libertar Lúcifer. <strong>1ª aparição: 22º episódio da 1ª temporada ("Devil's Trap")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/meg.jpg" alt="Meg Masters">
        <h3>Meg Masters</h3>
        <strong class="tag-demônio">Demônio</strong>
        <p>Meg começa como uma antagonista cruel, mas desenvolve uma relação complexa com Castiel, mostrando nuances no mundo demoníaco. <strong>1ª aparição: 12º episódio da 1ª temporada ("Faith")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/abaddon.jpg" alt="Abaddon">
        <h3>Abaddon</h3>
        <strong class="tag-demônio">Cavaleira do Inferno</strong>
        <p>Abaddon é uma das Cavaleiras originais do Inferno, que retorna na era moderna para desafiar Crowley e os Winchester. <strong>1ª aparição: 17º episódio da 8ª temporada ("Goodbye Stranger")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/ramiel.jpg" alt="Ramiel">
        <h3>Ramiel</h3>
        <strong class="tag-demônio">Príncipe do Inferno</strong>
        <p>Ramiel é um dos príncipes demoníacos, preferindo solidão e jogos de tabuleiro ao caos infernal. Sua calma é mais assustadora que gritos. <strong>1ª aparição: 13º episódio da 12ª temporada ("Family Feud")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/lilith.jpg" alt="Lilith">
        <h3>Lilith</h3>
        <strong class="tag-demônio">Primeira Demônia</strong>
        <p>Lilith é a primeira criatura demoníaca e o último selo para o Apocalipse. Sua aparência infantil contrasta com sua natureza maligna. <strong>1ª aparição: 9º episódio da 3ª temporada ("Malleus Maleficarum")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/samhain.jpg" alt="Samhain">
        <h3>Samhain</h3>
        <strong class="tag-demônio">Demônio Especial</strong>
        <p>Samhain é um demônio único capaz de ressuscitar os mortos e controlar criaturas sobrenaturais. Um dos selos do Apocalipse. <strong>1ª aparição: 7º episódio da 4ª temporada ("It's the Great Pumpkin, Sam Winchester")</strong></p>
    </div>`

]

const bruxa = [`<div class="card">
        <img src="../img/rowena.jpg" alt="Rowena MacLeod">
        <h3>Rowena MacLeod</h3>
        <strong class="tag-bruxa">Bruxa</strong>
        <p>Rowena é a bruxa escocesa mais poderosa da série, mãe de Crowley e aliada eventual dos Winchester. Seu charme e inteligência são tão afiados quanto seu senso de moda. <strong>1ª aparição: 18º episódio da 10ª temporada ("Book of the Damned")</strong></p>
    </div>`

]

const divino = [`<div class="card">
        <img src="../img/death.jpg" alt="Morte">
        <h3>Morte</h3>
        <strong class="tag-divino">Entidade Primordial</strong>
        <p>Um dos seres mais antigos do universo, personificação da morte. Elegante, filosófico e imensamente poderoso, carrega uma foice que pode matar qualquer coisa. <strong>1ª aparição: 21º episódio da 5ª temporada ("Two Minutes to Midnight")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/chuck.jpg" alt="Chuck Shurley">
        <h3>Chuck Shurley</h3>
        <strong class="tag-divino">Deus</strong>
        <p>Inicialmente apresentado como um profeta escrevendo os livros "Supernatural", é revelado como o próprio Deus. Complexo e às vezes infantil, sua relação com a criação é conturbada. <strong>1ª aparição como Deus: 18º episódio da 5ª temporada ("Point of No Return")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/amara.jpg" alt="Amara">
        <h3>Amara</h3>
        <strong class="tag-divino">A Escuridão</strong>
        <p>A irmã mais velha de Deus e personificação da Escuridão primordial. Seu poder rivaliza com o do Criador, representando o vazio e a destruição. <strong>1ª aparição: 1º episódio da 11ª temporada ("Out of the Darkness, Into the Fire")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/billie.jpg" alt="Billie">
        <h3>Billie</h3>
        <strong class="tag-divino">Morte</strong>
        <p>Ceifadora que assume o cargo de Morte após a morte do anterior. Direta e impessoal, representa a inevitabilidade do fim. <strong>1ª aparição: 9º episódio da 11ª temporada ("O Brother Where Art Thou")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/metatron.jpg" alt="Metatron">
        <h3>Metatron</h3>
        <strong class="tag-divino">Escriba de Deus</strong>
        <p>O escriba celestial que registra as palavras de Deus. Egocêntrico e manipulador, chega a usurpar o lugar de Deus no Céu. <strong>1ª aparição: 20º episódio da 8ª temporada ("Pac-Man Fever")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/joshua.jpg" alt="Joshua">
        <h3>Joshua</h3>
        <strong class="tag-divino">Anjo</strong>
        <p>O único anjo que ainda se comunica diretamente com Deus. Sábio e pacífico, cultiva um jardim no Céu. <strong>1ª aparição: 18º episódio da 5ª temporada ("Point of No Return")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/empty.jpg" alt="O Vazio">
        <h3>O Vazio</h3>
        <strong class="tag-divino">Entidade</strong>
        <p>Personificação do lugar onde anjos e demônios vão após a morte final. Aparece como uma figura sombria e perturbadora. <strong>1ª aparição: 3º episódio da 13ª temporada ("Patience")</strong></p>
    </div>`,
    `<div class="card">
        <img src="../img/sombra.jpg" alt="A Sombra">
        <h3>A Sombra</h3>
        <strong class="tag-divino">Entidade</strong>
        <p>Ser cósmico que habita o Vazio e odeia ser perturbada. Considerada uma das forças mais antigas e poderosas. <strong>1ª aparição: 23º episódio da 12ª temporada ("All Along the Watchtower")</strong></p>
    </div>`, `<div class="card">
        <img src="../img/cain.jpg" alt="Caim">
        <h3>Caim</h3>
        <strong class="tag-demônio">Portador da Marca</strong>
        <p>O bíblico Caim, portador da primeira marca de Caim e criador dos Cavaleiros do Inferno. Dean herda seu legado sangrento. <strong>1ª aparição: 11º episódio da 9ª temporada ("First Born")</strong></p>
    </div>`

]

const monstros = [  `<div class="card">
    <img src="../img/leviathan.jpg" alt="Leviatã">
    <h3>Leviatã</h3>
    <strong class="tag-monstro">Criatura Primordial</strong>
    <p>Criaturas antigas e vorazes que se alimentam de humanos. São quase indestrutíveis e liderados por Dick Roman. <strong>1ª aparição: 10º episódio da 7ª temporada ("Death's Door")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/wendigo.jpg" alt="Wendigo">
    <h3>Wendigo</h3>
    <strong class="tag-monstro">Monstro</strong>
    <p>Criatura canibal que habita florestas remotas. Extremamente rápida e forte, com garras afiadas. <strong>1ª aparição: 2º episódio da 1ª temporada ("Wendigo")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/alpha-vampire.jpg" alt="Alpha Vampiro">
    <h3>Alpha Vampiro</h3>
    <strong class="tag-monstro">Original</strong>
    <p>O primeiro vampiro, criado por Eve. Inteligente, poderoso e líder de todos os vampiros. <strong>1ª aparição: 3º episódio da 6ª temporada ("The Third Man")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/jefferson.jpg" alt="Jefferson Starships">
    <h3>Jefferson Starships</h3>
    <strong class="tag-monstro">Monstro Híbrido</strong>
    <p>Monstros criados por Eve combinando características de várias criaturas. Receberam esse nome por Dean. <strong>1ª aparição: 19º episódio da 6ª temporada ("Mommy Dearest")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/ghoul.jpg" alt="Ghoul">
    <h3>Ghoul</h3>
    <strong class="tag-monstro">Monstro</strong>
    <p>Criaturas necrófagas que se disfarçam de suas vítimas. Vivem em cemitérios e catacumbas. <strong>1ª aparição: 6º episódio da 1ª temporada ("Skin")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/shapeshifter.jpg" alt="Metamorfo">
    <h3>Metamorfo</h3>
    <strong class="tag-monstro">Monstro</strong>
    <p>Pode assumir a forma de qualquer pessoa que tocar. Um dos inimigos mais traiçoeiros dos Winchester. <strong>1ª aparição: 6º episódio da 1ª temporada ("Skin")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/rukus.jpg" alt="Rakshasa">
    <h3>Rakshasa</h3>
    <strong class="tag-monstro">Demônio Hindu</strong>
    <p>Criatura da mitologia hindu que se alimenta de pesadelos humanos. Aparece como um homem com cabeça de tigre. <strong>1ª aparição: 11º episódio da 7ª temporada ("Adventures in Babysitting")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/shtriga.jpg" alt="Shtriga">
    <h3>Shtriga</h3>
    <strong class="tag-monstro">Bruxa Vampírica</strong>
    <p>Bruxa da mitologia albanesa que drena a força vital das crianças. Uma das primeiras caçadas de John Winchester. <strong>1ª aparição: 17º episódio da 1ª temporada ("Hell House")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/djinn.jpg" alt="Djinn">
    <h3>Djinn</h3>
    <strong class="tag-monstro">Gênio</strong>
    <p>Criaturas que prendem vítimas em sonhos ilusórios enquanto se alimentam de seu sangue. <strong>1ª aparição: 20º episódio da 2ª temporada ("What Is and What Should Never Be")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/rawhead.jpg" alt="Rawhead">
    <h3>Rawhead</h3>
    <strong class="tag-monstro">Monstro</strong>
    <p>Monstro inglês que habita esgotos e ataca crianças. Extremamente resistente e violento. <strong>1ª aparição: 6º episódio da 1ª temporada ("Skin")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/kitsune.jpg" alt="Kitsune">
    <h3>Kitsune</h3>
    <strong class="tag-monstro">Raposa Sobrenatural</strong>
    <p>Espírito de raposa da mitologia japonesa que se alimenta de glândulas pineais humanas. <strong>1ª aparição: 13º episódio da 6ª temporada ("Unforgiven")</strong></p>
</div>`

]

const comum = [  `<div class="card">
    <img src="../img/jody.jpg" alt="Jody Mills">
    <h3>Jody Mills</h3>
    <strong class="tag-humano">Xerife</strong>
    <p>Xerife corajosa que se torna uma das aliadas mais confiáveis dos Winchester e figura materna para Claire e outras jovens caçadoras. <strong>1ª aparição: 7º episódio da 5ª temporada ("The Curious Case of Dean Winchester")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/kevin.jpg" alt="Kevin Tran">
    <h3>Kevin Tran</h3>
    <strong class="tag-humano">Profeta</strong>
    <p>Estudante brilhante transformado em profeta de Deus, forçado a decifrar as Tábuas dos Anjos. Sua história é uma das mais trágicas. <strong>1ª aparição: 20º episódio da 7ª temporada ("The Girl with the Dungeons and Dragons Tattoo")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/donna.jpg" alt="Donna Hanscum">
    <h3>Donna Hanscum</h3>
    <strong class="tag-humano">Xerife</strong>
    <p>Xerife de Minnesota com sotaque marcante e coração enorme. Uma das aliadas mais otimistas e leais dos Winchesters. <strong>1ª aparição: 8º episódio da 10ª temporada ("Hibbing 911")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/becky.jpg" alt="Becky Rosen">
    <h3>Becky Rosen</h3>
    <strong class="tag-humano">Fã</strong>
    <p>Fã obcecada pelos livros de Chuck Shurley sobre os Winchester. Mostra o lado bizarro da fama dos irmãos. <strong>1ª aparição: 5º episódio da 5ª temporada ("Fan Fiction")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/linda.jpg" alt="Linda Tran">
    <h3>Linda Tran</h3>
    <strong class="tag-humano">Mãe</strong>
    <p>Mãe de Kevin Tran, que enfrenta o mundo sobrenatural para proteger seu filho. Uma das personagens humanas mais corajosas. <strong>1ª aparição: 20º episódio da 7ª temporada ("The Girl with the Dungeons and Dragons Tattoo")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/eileen.jpg" alt="Eileen Leahy">
    <h3>Eileen Leahy</h3>
    <strong class="tag-humano">Caçadora</strong>
    <p>Caçadora surda da família Leahy, que desenvolve uma conexão especial com Sam. Representação importante de diversidade. <strong>1ª aparição: 11º episódio da 11ª temporada ("Into the Mystic")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/missouri.jpg" alt="Missouri Moseley">
    <h3>Missouri Moseley</h3>
    <strong class="tag-humano">Médium</strong>
    <p>Médium que ajudou a família Winchester no passado. Uma das primeiras conexões sobrenaturais de John após a morte de Mary. <strong>1ª aparição: 11º episódio da 1ª temporada ("Scarecrow")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/garth.jpg" alt="Garth Fitzgerald IV">
    <h3>Garth Fitzgerald IV</h3>
    <strong class="tag-humano">Caçador</strong>
    <p>Caçador atrapalhado mas de bom coração que eventualmente se torna um lobisomem "do bem". Fornece alívio cômico. <strong>1ª aparição: 8º episódio da 7ª temporada ("Season Seven, Time for a Wedding!")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/patience.jpg" alt="Patience Turner">
    <h3>Patience Turner</h3>
    <strong class="tag-humano">Médium</strong>
    <p>Neta de Missouri Moseley que herda seus poderes psíquicos. Mostra o legado das famílias ligadas aos Winchester. <strong>1ª aparição: 3º episódio da 13ª temporada ("Patience")</strong></p>
</div>`,
`<div class="card">
    <img src="../img/wayne.jpg" alt="Wayne">
    <h3>Wayne</h3>
    <strong class="tag-humano">Caçador Aposentado</strong>
    <p>Caçador veterano que aparece no episódio "Weekend at Bobby's". Mostra a rede de apoio por trás dos Winchesters. <strong>1ª aparição: 4º episódio da 6ª temporada ("Weekend at Bobby's")</strong></p>
</div>`
    
]

function filtroPers() {

    var todos = ` `

    var filtro = filtrar.value

    if (filtro == 'Todos') {
        for (var i = 0; i < personagens.length; i++) {
            todos += personagens[i]
        }
    }
    else if (filtro == 'Cacadores') {
        for (var i = 0; i < cacadores.length; i++) {
            todos += cacadores[i]
        }
    }
    else if (filtro == 'Anjo') {
        for (var i = 0; i < anjos.length; i++) {
            todos += anjos[i]
        }
    }
    else if (filtro == 'Demonio') {
        for (var i = 0; i < demonio.length; i++) {
            todos += demonio[i]
        }
    }
    else if (filtro == 'Bruxa') {
        for (var i = 0; i < bruxa.length; i++) {
            todos += bruxa[i]
        }
    }
    else if (filtro == 'Divino') {
        for (var i = 0; i < divino.length; i++) {
            todos += divino[i]
        }
    }
    else if (filtro == 'Monstros') {
        for (var i = 0; i < monstros.length; i++) {
            todos += monstros[i]
        }
    }
    else if (filtro == 'Comum') {
        for (var i = 0; i < comum.length; i++) {
            todos += comum[i]
        }
    }

    section_filtros.innerHTML = todos
}