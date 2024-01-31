import { Router, GlobalState, Features } from '@vixen-front/base'
import Main from './Main'
import Test from './Test'

export const router = Router.create()
export const globalState = GlobalState.create({
    user: 'Joëlle',
})

router.setRoutes({
    main: <Main />,
    test: <Test />,
})

export default Features.create({ router, globalState })
