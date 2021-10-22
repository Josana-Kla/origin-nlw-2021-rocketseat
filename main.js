const linksSocialMedia = {     // criação de um objeto com várias variáveis dentro. Vai ser uma forma de trocar os valores do HTML sem mexer diretamente no HTML
  github: "Josana-Kla",
  youtube: "UC0IiEmhBauNKopdNGRGmiXg",
  instagram: "jambt",
  facebook: "josana.klagenberg",
  twitter: "Jambt_K"
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {  //laço de repetição criado! Vai pegar os filhos do ID socialLinks, ou seja, vai pegar cada li do ID, e guardá-los na variável li até acabar de rodar todos esses filhos (li)
    const social = li.getAttribute('class')  //criei uma variável para guardar cada valor/atributo da class da li no HTML
    
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`  //Vou pegar o primeiro índice(no caso, o primeiro elemento(0), que é a tag a) dos filhos da li para pegar o href desse primeiro elemento e vou substituir esse href por um em que vai colocando o nome de cada social mídia que guardei na variável social. E, para que apareça o meu user certo de acordo com a respectiva mídia social ao rodar o laço de repetição, eu falo para acessar a variável linksSocialMedia conforme a variável SOCIAL que eu estiver rodando

    alert(li.children[0].href)
  }
  /* document.getElementById('userName').textContent = "Josana Klagenberg 233"   //Vou acessar a DOM, pegar o elemento pelo ID, e o elemento que eu quero pegar se chama userName. Vou usar o .textContent para pegar o conteúdo de dentro desse ID chamado userName */

  /* userName.textContent = "Marcelo"  // Como eu usei um ID no HTML, o JS já entende que tudo que eu colocar algumacoisa.método esse algumacoisa é um ID que usei um método para acessá-lo. Por isso, em vez do passo anterior, posso escrever dessa forma diretamente */
}

changeSocialMediaLinks()