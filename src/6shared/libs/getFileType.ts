type FileType = 'image' | 'video' | 'other';
export function getFileType(filename: string): FileType {
    // Получаем расширение файла в нижнем регистре
    const extension = filename.toLowerCase().split('.').pop() || '';

    // Списки допустимых расширений
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'];
    const videoExtensions = ['mp4', 'webm', 'avi', 'mov', 'wmv', 'flv', 'mkv'];

    if (imageExtensions.includes(extension)) {
        return 'image';
    }

    if (videoExtensions.includes(extension)) {
        return 'video';
    }

    return 'other';
}