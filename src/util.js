let _clipPathSupported = null

// Check if clip-path is supported. From http://stackoverflow.com/a/30041538.
export function clipPathSupported () {
  if (_clipPathSupported != null) {
    return _clipPathSupported
  }
  if (typeof document === 'undefined') {
    _clipPathSupported = false
    return false
  }

  const base = 'clipPath'
  const prefixes = ['Webkit']
  const properties = [base, ...prefixes.map((prefix) => prefix + base.charAt(0).toUpperCase() + base.slice(1))]
  const testElement = document.createElement('testelement')
  const attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)'

  // Interate over the properties and see if they pass two tests.
  for (const property of properties) {
    // First, they need to even support clip-path (IE <= 11 does not)...
    if (testElement.style[property] === '') {
      // Second, we need to see what happens when we try to create a CSS shape...
      testElement.style[property] = attribute
      if (testElement.style[property] !== '') {
        _clipPathSupported = true
        return true
      }
    }
  }
  _clipPathSupported = false
  return false
}
