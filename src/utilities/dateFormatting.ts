export const convertDateToCustomFormat = (dateString: string) => {
  // Split the date string into year, month, and day
  const [year, month, day] = dateString.split('-');

  // Format the time string with default values
  const timeString1 = '07%3A53%3A27.204Z';

  const timeString2 = '07%3A53%3A27.205Z';

  // Concatenate the date and time strings in the desired format
  const convertedDate1 = `${year}-${month.padStart(2, '0')}-${day.padStart(
    2,
    '0'
  )}T${timeString1}`;
  const convertedDate2 = `${year}-${month.padStart(2, '0')}-${day.padStart(
    2,
    '0'
  )}T${timeString2}`;

  return [convertedDate1, convertedDate2];
};

// Usage example
// const regularDate = '2023-6-30';
// const convertedDate = convertDateToCustomFormat(regularDate);
// console.log(convertedDate); // Output: 2023-06-30T07%3A63%3A27.205Z
