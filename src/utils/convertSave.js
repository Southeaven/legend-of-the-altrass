export default function (oldSave) {
  const version = oldSave.version
  if (version === '0.1.0') {
    // Current version
    return oldSave
  }
}
