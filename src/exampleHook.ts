import { useState, useCallback, useMemo, useEffect } from 'react'
import type { LayoutChangeEvent, LayoutRectangle } from 'react-native'

// 토글 기능 구현
export const useToggle = (
  initialValue: boolean = false,
  deps: any[] = []
): [boolean, () => void] => {
  // 토글 상태를 저장할 state 초기화
  const [value, setValue] = useState(initialValue)
  // 토글 상태를 변경하는 함수
  const toggleValue = useCallback(() => setValue(value => !value), deps)
  return [value,toggleValue]
}

// 타임 아웃 구현
export const useTimeout = (
  callback: () => void,
  duration: number,
  deps: any[] = []
): void => {
  useEffect(() => {
    if (duration === 0) return
    const id = setTimeout(callback, duration);
    return () => clearTimeout(id)
  }, [duration, ...deps])
}

// 중복된 스타일을 제거하는 기능 구현
export const useStyle = (styles: object, deps: any[] = []) => {
  // 메모리제인션
  return useMemo (() => styles, deps)
}

// 네트워크 비동기 처리 구현
export const useAsync = <T>(
  asyncCallback: () => Promise<T>,
  deps: any[] = []
): [Error | null, () => void] => {

  // 에러 처리
  const [error, setError] = useState<Error | null>(null)

    // asyncCallback 함수 실행
    useEffect (() => {
      asyncCallback().catch(setError)
    }, deps)

  // 에러 초기화
  const resetError = useCallback (() => setError(notUsed => null), [])
  return [error, resetError]
}

// 현재 레이아웃 상태를 가져오는 기능
export const useLayout = (): [
  LayoutRectangle,
  (e: LayoutChangeEvent) => void
] => {
  // 레이아웃 정보 가져올 state 초기화
  const [layout, setLayout] = useState <LayoutRectangle>({
    x:0,
    y:0,
    width:0,
    height:0
  })
// 레이아웃 정보를 이벤트로 가져오는 함수
const onLayout = useCallback ((e: LayoutChangeEvent) => {
  const { layout } = e.nativeEvent;
    setLayout(layout)
}, [])
  return [layout, onLayout]
}
