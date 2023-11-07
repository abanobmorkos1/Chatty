
function sideBar () {

    return (
        <div className='sidenav-container'>
            <div className='search-container' >
                    <input className='search-form'
                    type='text'
                    placeholder='Search by name' 
                    />
        
            <div className='message-container'>
            <div className='avatar'>
            <img src='https://media.licdn.com/dms/image/D4E03AQEhNGnTmIHRfg/profile-displayphoto-shrink_800_800/0/1696491861573?e=1704931200&v=beta&t=YloQB88GllLNxkYlMcYL4rgTBMu80zf_prEstj3LC04'/>
            <div className='message-content'>
                <div className='wrapper'>
                    <h6 style={{mr}}>Abe</h6>
                    <h4>Hello</h4>
                </div>
            </div>
            </div>
            </div>
            </div>

        </div>
    )
}

export default sideBar;