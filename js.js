let parsed = JSON.parse(null)

parsed

console.log('[3]' ?? '[]')
console.log('[]' ?? '[]')
console.log(null ?? '[]')
console.log(undefined ?? '[]')
console.log(false ?? '[]')
