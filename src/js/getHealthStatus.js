 function healthStatus(status) {
  const { health } = status;
  if (health > 50) {
    return 'healthy';
  } else if (health >= 15 && health <= 49) {
    return 'wounded';
  }
  return 'critical';
}
export default healthStatus;
