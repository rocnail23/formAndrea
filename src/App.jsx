import { useState } from 'react'



function App() {
  const [form , setForm ] = useState(() => {

    const form = JSON.parse(localStorage.getItem("form"))
    if(form){
      return form
    }else{
      return {}
    }

  })
  const HandleChange  = (e) => {

    const newForm = {
      ...form,
      [e.target.name]: e.target.value
    }

    setForm(newForm)

    
    localStorage.setItem("form", JSON.stringify(newForm))

  }

  console.log(form)

  return (
    <>
      <form>
          {data.map(({title,answer}) => (
            <div key={title}>
                <h4 style={{fontSize: "16px"}}>{title}</h4>
                {answer.map(answer => (
                  <div
                  style={{display:'flex'}} 
                  key={answer}> 
                  <input 
                  onChange={HandleChange}
                  type="radio"
                  name={title}
                  value={answer}
                  checked={form[title] == answer}
                  
                  />
                  <p style={{fontSize: "12px"}}>{answer}</p>
                  </div>
                ))}
            </div>
          ))}
        </form>
    </>
  )
}

export default App


const data = [

  {
    title: "La modificación de determinantes de la oferta genera:",
    answer: [
    
        "a. La demanda del mercado",
        "c. Desplazamientos de la curva de demanda",
        "b. Desplazamientos de la curva de oferta",     
        "d. Dilatación de oferta"
      
    ]
  },

  {
    title: "La Competencia Perfecta es:",
    answer: [
      "a. Representación de las características indeseadas del mercado",
      "c. Un modelo representativo de la realidad",
      "b. Existe un único proveedor del bien",
      "d. Cuando los productores no tienen poder de mercado"

    ]
  },


  {
    title:"La demanda de yates varia:",
    answer: [
      "a. En el sentido inverso a los precios",
      "c. Directamente proporcional a los precios",
      "b. Inversamente proporcional a los precios",
      "d. En el mismo sentido que los precios"
    ]
  },
  {
    title:"En la curva de demanda, las modificaciones en la cantidad demandada ocurren únicamente por variaciones de precio",
    answer:[
      "Verdadero",
       "Falso"
    ]
  },
  {
    title: "Para que se cumpla la LEY DE OFERTA las cantidades deben variar",
    answer: [
      "a. En el mismo sentido que los precios",
      "b. Directamente proporcional a los precios",
      "c. En el sentido inverso a los precios",
      "d. Inversamente proporcional a los precios",

    ]
  },
  {
    title: "Un cambio en el precio de un bien de 30% ocasiona una variación en la cantidad demandada de:",
    answer: [
      "a. Menos del 30%, entonces la Elasticidad precio de la demanda tendrá un resultado > 1",
      "b. Más del 30% , entonces la Elasticidad precio de la demanda tendrá un resultado >1",
      "c. Más del 30% , entonces la Elasticidad precio de la demanda tendrá un resultado < 1",
      "d. 30% , entonces la Elasticidad precio de la demanda tendrá un resultado = 0",

    ]
  },
  {
    title: "Precio y cantidad varían en sentido inverso, manteniendo todos los demás factores constantes",
    answer: [
      "a. Ley de la oferta",
      "b. Principio de equimarginalidad",
      "c. Ley de Gossen",
      "d. Ley de la demanda"
    ]
  },
  {
      title: "El cambio que se produjo en el gráfico, representa:",
      answer: [
        "a. Disminución de la demand",
        "b. Contracción de la cantidad ofrecida",
        "c. Aumento de la demanda",
        "d. Dilatación de la cantidad ofrecida",

      ]
  },
  {
      title: "El mal tiempo debido a muchas lluvias, puede hacer desplazar la curva de oferta del producto tomate",
      answer: [
        "a. Hacia la izquierda",
        "b. No hay desplazamiento",
        "c. Se produce desplazamiento, pero en la misma curva de oferta",
        "d. Hacia la derecha",
      ]
  },
  {
      title: "El mercado de competencia perfecta se puede caracterizar por:",
      answer: [
        "a. Que los productos sean Homogéneos",
        "b. Que los agentes tengan perfectos conocimientos de precios y costos",
        "c. Contar con un gran número de vendedores y compradores",
        "d. Todas las alternativas",

      ]
  },
  {
    title: "El mercado es el encuentro entre consumidores y productores para intercambiar un bien de valor común",
    answer: [
      "Verdadero",
      "Falso"

    ]

  },
  {
    title: "La economía de mercado se conoce también como:",
    answer:  [
      "a. Economía de libre mercado",
      "b. Economía de cambio",
      "c. Economía centralizada",
      "d. Solamente a y c",
      "e. Todas las respuestas"

    ]

  },
  {
    title: "Un mercado con pocos vendedores y muchos compradores recibe el nombre de:",
    answer: [
      "a. Oligopolio",
      "b. Competencia monopolística",
      "c. Competencia perfecta",
      "d. Monopolio"

    ]
  },
  {
      title: "La demanda de la sal comestible puede considerarse:",
      answer: [
        "a. Inelástica",
        "c. Perfectamente elástica",
        "d. Elástica",
        "b. Perfectamente inelástica",
      ]
  },
  {
      title: "El mercado es el encuentro entre consumidores y productores para intercambiar un bien de valor común:",
      answer: [
        "Verdadero",
        "Falso"

      ]
  },



]