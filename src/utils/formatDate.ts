const formatDate = (date: Date): string => {
  const value = new Date(date);

  return Intl.DateTimeFormat('pt-BR').format(value);
};

export default formatDate;
