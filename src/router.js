import {HashRouter, Route} from 'react-router-dom'
import PublishList from './Pages/PublishList'

export default function(){
    return <HashRouter>
        <Route component={PublishList}></Route>
    </HashRouter>
}