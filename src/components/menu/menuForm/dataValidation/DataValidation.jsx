    export  const uniqueLink = (title,dataLinks) => {
        if (dataLinks.find(link => link.title == title) !== undefined) {
            return (false)
        }
    
        return (true);
    
    }
    
