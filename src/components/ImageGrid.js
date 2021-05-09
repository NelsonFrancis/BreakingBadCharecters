import React from 'react'

function ImageGrid({data}) {
    return (
        <div>
                {
                    data.map(data => (
                        <div key={data.char_id} className="data-grid">
                            <img src={data.img} alt="img" className="img" />
                            <p>{data.name}</p>
                        </div>
                    ))
                }
           
        </div>
    )
}

export default ImageGrid
