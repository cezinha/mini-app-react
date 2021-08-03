export const groupByDay = (data) => {
  const grouped = {};

  data.forEach((d) => {
    const dt = new Date(d.date);
    const mm = new Intl.DateTimeFormat('pt-BR', { month: '2-digit' }).format(dt);
    const dd = new Intl.DateTimeFormat('pt-BR', { day: '2-digit' }).format(dt);
    const yy = dt.getFullYear();

    grouped[`${yy}${mm}${dd}T00:00:00.000Z`] = [...(grouped[`${yy}${mm}${dd}T00:00:00.000Z`] ?? []), d];
  });
  return grouped;
};
