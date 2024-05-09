import {configureStore} from "@reduxjs/toolkit"
import itemSlice from "./ItemSlice";
import FetchStatusSlice from "./FetchStatusSlice";
import bagSlice from "./BagSlice";


const myntraStore = configureStore({
    reducer:{
       item: itemSlice.reducer, 
       fetchStatus:FetchStatusSlice.reducer,
       bag:bagSlice.reducer,
    }
});

export default myntraStore;