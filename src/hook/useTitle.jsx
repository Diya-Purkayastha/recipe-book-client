import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
        document.title =`Subs.boX | ${title}`;
    },[ ])
};

export default useTitle;