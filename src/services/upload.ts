import Taro from '@tarojs/taro';

const isWeapp = process.env.TARO_ENV === 'weapp';

/**
 * 上传图片。微信环境优先上传到云存储，失败时降级为本地路径；
 * 其余环境直接返回本地路径。
 * @param onProgress 上传进度回调（0-100）
 */
export function uploadImage(
  filePath: string,
  fileName: string,
  onProgress?: (percent: number) => void
): Promise<string> {
  if (!isWeapp) {
    // H5 / 其他环境：无真实上传，模拟快速进度并返回本地路径
    onProgress?.(30);
    return new Promise((resolve) => {
      setTimeout(() => {
        onProgress?.(100);
        resolve(filePath);
      }, 150);
    });
  }

  // 微信环境：真实上传到云存储，通过回调风格拿到 UploadTask 以监听进度
  return new Promise<string>((resolve) => {
    let uploadTask: any;
    try {
      uploadTask = Taro.cloud.uploadFile({
        cloudPath: `dishes/${fileName}`,
        filePath,
        success: (res) => {
          onProgress?.(100);
          resolve(res.fileID);
        },
        fail: (err) => {
          console.warn('[Upload] 云存储上传失败，降级为本地路径:', err);
          onProgress?.(100);
          resolve(filePath);
        },
      } as any) as any;
    } catch (err) {
      console.warn('[Upload] 云存储不可用，降级为本地路径:', err);
      onProgress?.(100);
      resolve(filePath);
      return;
    }

    if (onProgress && uploadTask && typeof uploadTask.onProgressUpdate === 'function') {
      uploadTask.onProgressUpdate((res: any) => {
        onProgress(res.progress);
      });
    }
  });
}