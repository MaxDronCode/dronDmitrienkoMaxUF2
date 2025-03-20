export const normalizeUrl = (url) => {
  return url.replaceAll(/\s/g, '%20');
}

export const buildUrl = (url, input) => {
  const index = url.indexOf("%27%27");
  return url.substring(0, index) + "%27" + input + "%" + url.substring(index + 4);
}

export const getMonth = (number) => {
  const months = ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Decembre'];
  return months[Number(number)];
}