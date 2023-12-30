import React from "react"

type Props = {
    params: {
        propertyid: string
    }
}

export default function PropertyPage({ params: { propertyid } }: Props) {
    return <div>list of properties map property fetch on side bar</div>
}

// export default async function Page({ params: { username } }) {
//     // Initiate both requests in parallel
//     const artistData = getArtist(username);
//     const albumData = getArtistAlbums(username);

//     // Wait for the artist's promise to resolve first
//     const artist = await artistData;

//     return (
//         <>
//             <h1>{artist.name}</h1>
//             {/* Send the artist information first,
//       and wrap albums in a suspense boundary */}
//             <Suspense fallback={<div>Loading...</div>}>
//                 <Albums promise={albumData} />
//             </Suspense>
//         </>
//     );
// }

// // Albums Component
// async function Albums({ promise }) {
//     // Wait for the albums promise to resolve
//     const albums = await promise;

//     return (
//         <ul>
//             {albums.map((album) => (
//                 <li key={album.id}>{album.name}</li>
//             ))}
//         </ul>
//     );
// }
