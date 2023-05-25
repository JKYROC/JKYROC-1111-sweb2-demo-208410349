const showClassDemo = (week) =>{
    const showDemo = document.querySelector('.demo-section');
    switch(week){
        case 'w1':
            showDemo.innerHTML = `<iframe src = '../demo/w01-calculator/index.html' width="100%" height="100%"/>`;
            break;
        case 'w1-md':
                showDemo.innerHTML = `<iframe src = '' width="100%" height="100%"/>`;
            break;
        case 'w2':
            showDemo.innerHTML = `<iframe src = '../demo/w02-tictactoe/tictactoe-starter/tictactoe_xx.html' width="100%" height="100%"/>`;
            break;
        case 'w2-md':
            showDemo.innerHTML = `<iframe src = '../md/w02_tictactoe/w02_208410349.html' width="100%" height="100%"/>`;
            break;
        case 'w3':
            showDemo.innerHTML = `<iframe src = '../demo/w03-reviews_starter/index.html' width="100%" height="100%"/>`;
            break;
        case 'w3-md':
                showDemo.innerHTML = `<iframe src = '../md/w03_reviews_starter/w03_208410349.html' width="100%" height="100%"/>`;
            break;
        case 'w4':
            showDemo.innerHTML = `<iframe src = '../demo/w04-menu starter/menu_starter_xx/index.html' width="100%" height="100%"/>`;
            break;
        case 'w4-md':
            showDemo.innerHTML = `<iframe src = '../md/w04-menu starter/w04_208410349.html' width="100%" height="100%"/>`;
            break;
        case 'w5':
            showDemo.innerHTML = `<iframe src = '../demo/w05-menu starter/menu_starter_xx/index.html' width="100%" height="100%"/>`;
            break;
        case 'w5-md':
            showDemo.innerHTML = `<iframe src = '../md/w05-menu starter/w05_208410349.html' width="100%" height="100%"/>`;
            break;
        case 'w5-2':
            showDemo.innerHTML = `<iframe src = '../demo/w05-modal-starter/index.html' width="100%" height="100%"/>`;
            break;
        case 'w5-2-md':
            showDemo.innerHTML = `<iframe src = '../md/w05-modal starter/w05_208410349.html' width="100%" height="100%"/>`;
            break;
        case 'w6':
            showDemo.innerHTML = `<iframe src = '../demo/w06-array/p3_49/p3_xx.html' width="100%" height="100%"/>`;
            break;
        case 'w6-md':
            showDemo.innerHTML = `<iframe src = '../md/w06-array/w06_208410349.html' width="100%" height="100%"/>`;
            break;
        case 'w9-1':
            showDemo.innerHTML = `<iframe src = '../demo/w09-midpre/p1/p1.html' width="100%" height="100%"/>`;
            break;
        case 'w9-2':
            showDemo.innerHTML = `<iframe src = '../demo/w09-midpre/p2/p2.html' width="100%" height="100%"/>`;
            break;
        case 'w9-3':
            showDemo.innerHTML = `<iframe src = '../demo/w09-midpre/p3/p3.html' width="100%" height="100%"/>`;
            break;
        case 'w15':
            showDemo.innerHTML = `<iframe src = '../demo/w15-store-project/p4_xx/index.html' width="100%" height="100%"/>`;
            break;             
    }
}