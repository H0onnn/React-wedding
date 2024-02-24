/**
 * @fileName = wedding_01
 * @format = jpg | webp
 * @option = c_fill, w_100, h_100
 */

interface Props {
  fileName: string;
  format: 'jpg' | 'webp';
  option?: string;
}

export function generateImageUrl({
  fileName,
  format,
  option = 'q_auto,c_fill',
}: Props): string {
  return `https://res.cloudinary.com/dgpezl4hi/image/upload/${option}/v1708762522/${format}/${fileName}.${format}`;
}
