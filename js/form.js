document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "553496809209";

  let cliente = document.querySelector("#cliente").value;
  let fecha = document.querySelector("#fecha").value;
  let hora = document.querySelector("#hora").value;
  let empleado = document.querySelector("#empleado").value;
  let servicio = document.querySelector("#servicio").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*-πWILL PIZZASπ-*%0A
		*PEDIDOS ONLINEπ*%0A%0A

		*COMIDA*%0A
   		*πππ*%0A
		${cliente}%0A
    		*πππ*%0A
		*BEBIDA*%0A
		${fecha}%0A
		*PAGAMENTO*%0A
		${hora}%0A
		*ENDERECO*%0A
		${empleado}%0A
		*OBSERV...*%0A
		${servicio}                                                                      
    *_____________________POR FAVOR ESPERE NOSSO RETORNO ESTAMOS π SEU PEDIDO.π.*%0A%0A
    *RESPONDEREMOS EM BREVEππ¨βπ³ππ΅*%0A%0A`


  if (cliente === "" || empleado === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `seu pedido sera encaminhado depois de iniciar conversa e dar ENVIAR., ${cliente}`;

  window.open(url);
});
