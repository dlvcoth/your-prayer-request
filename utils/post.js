export function generateUniqueId() {
  return `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

 // Example: "id-1698414015389-lr1tkc2gf"
