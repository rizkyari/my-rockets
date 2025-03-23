export const required = (v: string | number) =>
    !!v || 'This field is required'
  
export const isNumber = (v: string | number) =>
    !isNaN(Number(v)) || 'Must be a number'
  
export const isDate = (v: string) =>
    /^\d{4}-\d{2}-\d{2}$/.test(v) || 'Invalid date format'
  
export const isUrl = (v: string) =>
    /^https?:\/\/.+\..+/.test(v) || 'Must be a valid URL'
  