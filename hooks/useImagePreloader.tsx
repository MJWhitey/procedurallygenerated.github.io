import { useEffect, useRef, useState } from 'react'



export default function useImagePreloader(imageList: string[]) {
  const [imagesPreloaded, setImagesPreloaded] = useState<boolean>(false)
  const [imagesPercentLoaded, setImagesPercentLoaded] = useState<number>(0);
  const loadedCount = useRef<number>(0);

  function preloadImage (i: number, len: number) {
    const src = imageList[i];
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = function() {
        loadedCount.current ++;
        setImagesPercentLoaded(Math.ceil((loadedCount.current/len) * 100));
        console.log(`preloadImage : ${loadedCount.current} of ${len}`);
        resolve(img)
        
      }
      img.onerror = img.onabort = function() {
        reject(src)
      }
      img.src = src
    })
  }

  useEffect(() => {
    let isCancelled = false

    async function effect() {
      console.log('PRELOAD')

      if (isCancelled) {
        return
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const imagesPromiseList: Promise<any>[] = []
      for (let i = 0; i < imageList.length; i++) {
        imagesPromiseList.push(preloadImage(i, imageList.length))
      }
  
      await Promise.all(imagesPromiseList)

      if (isCancelled) {
        return
      }

      setImagesPreloaded(true)
    }

    effect()

    return () => {
      isCancelled = true
    }
  }, [imageList])

  return { imagesPreloaded, imagesPercentLoaded }
}