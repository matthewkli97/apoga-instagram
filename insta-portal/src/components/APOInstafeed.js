import React, { Component } from 'react';
import Instafeed from 'react-instafeed';

export default class APOInstafeed extends Component {

    render() {
        const instafeedTarget = 'instafeed'
        return (
            <div id={instafeedTarget}>
                <Instafeed
                    limit='100'
                    ref='instafeed'
                    resolution='standard_resolution'
                    sortBy='most-recent'
                    target={instafeedTarget}
                    template={'<a href="{{link}}" target="_blank" class="instafeed__item">' +
                    '<img class="instafeed__item__background" src="{{image}}" />' + '<p class="instafeed__item__likes">{{likes}}</p>'
                     + '</a>'}
                    userId='242664467'
                    clientId='99ad8da8c001446e94b4cb8c9b7b181b'
                    accessToken='242664467.1677ed0.265563058d824f4781f17f5beb32c34d'
                />
            </div>
        )
    }
}