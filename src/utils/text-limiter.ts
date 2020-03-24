export const textLimiter = (text: string, len: number, tail: string = '…'): string => {
  if (text.length > len) {
    return text.substring(0, len).replace('\n', ' ') + tail
  }
  return text
}
