# Instrucciones para IA

## Directrices generales
- Respeta la arquitectura del proyecto y realiza cambios mínimos.
- Prioriza soluciones mantenibles y evita tocar código no relacionado.

## Requisito de escalabilidad
- Las acciones del instalador deben vivir en archivos externos dentro de `actions/`.
- Evita añadir lógica compleja en `index.js`; úsalo solo para orquestar el wizard.

## Cuando se pidan nuevas features
- Mantén este patrón modular y actualiza la documentación correspondiente.
- Si una feature afecta configuración inicial, añade o ajusta la acción dedicada.
