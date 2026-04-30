# ZeroCog

*Una arquitectura de datos que solo recuerda lo que funcionó.*

**A. David Janer Pérez** · adavidjanerpérez@gmail.com

---

## El problema

*Toda organización toma decisiones. Muy pocas saben cuáles funcionaron.*

Los sistemas de IA actuales recuperan información, generan respuestas, procesan documentos. Hacen todo eso razonablemente bien. Pero comparten un defecto estructural que nadie ha resuelto: no distinguen entre información que alguna vez produjo un resultado correcto e información que no.

El efecto es sutil pero acumulativo. Una empresa que lleva tres años usando IA para apoyar decisiones comerciales, operativas o de compras no ha acumulado experiencia verificada — ha acumulado texto. Sus sistemas no saben qué propuestas funcionaron, qué proveedores fallaron, qué configuraciones se revirtieron, qué patrones de cliente se convirtieron y cuáles no.

Cada decisión nueva parte del mismo punto de ignorancia que la anterior. La organización no aprende. Simula que aprende.

> *Un sistema que no conecta decisiones con consecuencias no tiene memoria. Tiene archivo.*

---

## Qué es ZeroCog

*Una arquitectura de datos que impone una restricción simple: solo persiste lo que ha producido un resultado verificado.*

No es un modelo de lenguaje. No es una herramienta de búsqueda. No es un dashboard. Es la capa que falta entre los datos que una organización ya genera y las decisiones que toma cada día.

ZeroCog se conecta a las fuentes de datos existentes — CRM, email, chat interno, facturación, inventario, documentos, proyectos — y transforma cada decisión documentada en un evento estructurado. Ese evento solo persiste en el sistema si llega una señal verificada de que la decisión produjo un resultado. Sin resultado verificado, la decisión no entra en la memoria del sistema.

> *ZeroCog no condiciona qué modelos de IA usa una organización. Condiciona con qué experiencia operan esos modelos. El modelo sigue siendo el motor. ZeroCog es el criterio.*

---

## Lo que cambia

*La misma pregunta. Una respuesta completamente diferente.*

Un director comercial evalúa una oportunidad nueva — empresa mediana, primer contacto por LinkedIn, sector retail. Consulta al sistema. Hoy recibe información sobre el sector retail: tendencias, competidores, mejores prácticas. Útil. Genérico. Sin relación con lo que ha funcionado o fallado en su propia empresa.

Con ZeroCog, la misma consulta activa la experiencia verificada de la organización: en qué contextos similares se cerró negocio, qué patrón de aproximación funcionó, cuándo y por qué se cayeron oportunidades parecidas. No información sobre empresas similares en general — experiencia propia con resultado conocido.

> *En 14 oportunidades con este perfil, el ciclo se cerró cuando la primera reunión incluía una demo operativa. En los 6 casos donde se envió propuesta económica sin demo, el cierre tardó el doble o no ocurrió. Los 3 descartados compartían un patrón: decisor sin presupuesto propio.*

El mismo principio aplica al resto de la operación. El responsable de compras que evalúa un proveedor activa el historial verificado de proveedores similares — no opiniones del mercado, sino experiencia propia con resultado documentado. El project manager que arranca un nuevo proyecto activa los patrones de proyectos anteriores con ese perfil de cliente, incluyendo los que se desviaron y por qué.

---

## La pregunta que ningún sistema puede responder hoy

*¿Cómo está la empresa hoy?*

Cualquier sistema de IA puede responder esa pregunta ahora mismo con un texto fluido y bien estructurado. Completamente genérico. Basado en patrones estadísticos de miles de empresas que no son la tuya.

ZeroCog conectado al stack operativo de una empresa responde desde otro lugar: activa el estado real verificado de cada área y lo sintetiza desde experiencia propia, en tiempo real.

> *Tienes 3 oportunidades en fase de propuesta con el mismo perfil que las 4 que se cayeron el trimestre pasado — todas sin demo previa. Dos proveedores de material B tienen historial de retraso en pedidos grandes. El proyecto con cliente X muestra el mismo patrón de cambios de alcance que los dos proyectos que se desviaron en coste el año pasado. La configuración de precios en el canal online lleva 6 semanas sin cierre — la última vez que ocurrió esto, revertirla funcionó.*

Eso no es un informe generado. Es la memoria operativa real de la empresa hablando. Cada elemento tiene un origen verificado, una decisión adjunta, y un resultado conocido.

> *Es la diferencia entre consultar a alguien que ha leído mucho sobre empresas y consultar a alguien que ha vivido dentro de la tuya.*

---

## Por qué ahora

Tres condiciones que se han alineado recientemente hacen esto posible por primera vez:

**Los modelos de lenguaje son suficientemente buenos.** La capa de estructuración — convertir registros operativos en eventos con contexto y decisión — puede hacerse hoy con LLMs sin ingeniería específica de dominio. Eso elimina la principal barrera de entrada que tuvo este tipo de sistemas en el pasado.

**Las empresas ya tienen el corpus.** Años de CRM, emails, chats, facturas, proyectos. El historial de decisiones con consecuencias existe. Lo que no existe es la infraestructura para activarlo como memoria verificada.

**La regulación lo exige.** El AI Act europeo y la normativa sectorial en finanzas, seguros y salud están creando un mercado para sistemas que puedan demostrar en qué experiencia se basaron para recomendar algo. ZeroCog produce esa trazabilidad de forma estructural.

---

## La ventaja que se acumula

*No es el algoritmo. Es el corpus que se construye con cada despliegue.*

La arquitectura de ZeroCog es replicable. Lo que no es replicable es la memoria verificada que se acumula en cada organización con cada decisión evaluada. Una empresa que lleva doce meses con el sistema tiene miles de eventos con resultado conocido. Ese corpus no se compra — se construye con tiempo y con acceso.

Esto crea una dinámica de valor compuesto: más tiempo en producción genera más eventos evaluados, que mejoran la calidad de las decisiones, que generan más confianza, que produce más tiempo en producción. El sistema mejora mientras opera.

Y cada cliente construye su propio moat. La experiencia verificada de una empresa no sirve a otra. Eso hace la relación estructuralmente difícil de abandonar.

---

## El origen

*ZeroCog nació de una pregunta que los sistemas existentes no podían responder.*

¿Por qué los sistemas de IA ignoran estructuralmente lo más importante de una decisión — si funcionó? No había arquitectura que resolviera eso desde la raíz. La respuesta fue construirla: definir el problema con precisión, diseñar la restricción mínima necesaria, y documentarlo con el rigor suficiente para que cualquier equipo competente pudiera implementarlo.

La dimensión ética de ZeroCog — qué significa que un sistema opere sobre experiencia verificada, quién controla esa experiencia, qué ocurre cuando se despliega sobre decisiones que afectan a personas — es parte central del diseño, no un añadido posterior. Es también el territorio donde la ventaja es más difícil de replicar.

> *El fundador permanece en el proyecto. La inversión aporta equipo y recursos para construir lo que ya está especificado. Esa distinción es explícita.*

---

> **¿Cuánto vale una organización que recuerda qué funcionó?**

La especificación técnica completa existe y está disponible bajo NDA. El sistema es construible con tecnología disponible hoy. La única pregunta es quién quiere construirlo.

*ZeroCog — One Paper | Confidencial*
