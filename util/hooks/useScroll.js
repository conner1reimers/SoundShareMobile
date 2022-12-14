import { useDispatch } from 'react-redux'
import { setScroll } from '../../redux/store/actions/uiActions'

const useScroll = () => {
  const dispatch = useDispatch()

  const scrollHandler = (e) => {
    dispatch(setScroll(e.nativeEvent.contentOffset))
  }

  return scrollHandler
}

export default useScroll
