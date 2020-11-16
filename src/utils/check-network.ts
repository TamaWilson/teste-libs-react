export default function checkNetwork() {
  if (window.navigator.onLine) {
    return true;
  } else {
    return false;
  }
}
