export default function getType(data) {
  console.log(`${data} : ` + Object.prototype.toString.call(data).slice(8,-1))
}
