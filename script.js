
document.addEventListener('DOMContentLoaded', function() {
    const videoUpload = document.getElementById('video-upload');
    const uploadButton = document.getElementById('upload-button');
    const fileNameDisplay = document.getElementById('file-name');
    const resultSection = document.querySelector('.result-section');
    const clipsContainer = document.querySelector('.clips-container');
    const downloadAllButton = document.getElementById('download-all');

    // Показать имя выбранного файла
    videoUpload.addEventListener('change', function() {
        if (videoUpload.files.length > 0) {
            let fileName = videoUpload.files[0].name;
            fileNameDisplay.textContent = fileName;
        } else {
            fileNameDisplay.textContent = 'Файл не выбран';
        }
    });

    // Обработчик загрузки видео
    uploadButton.addEventListener('click', function() {
        if (videoUpload.files.length > 0) {
            // Здесь можно добавить логику отправки видео на сервер и получения клипов
            // Для примера покажем секцию результата
            resultSection.style.display = 'block';

            // Очистим предыдущие клипы, если они были
            clipsContainer.innerHTML = '';

            // Добавим пример клипов
            for (let i = 1; i <= 6; i++) {
                const clip = document.createElement('div');
                clip.classList.add('clip');

                clip.innerHTML = `
                    <video src="clip${i}.mp4" controls></video>
                    <div class="clip-info">
                        <p>Клип ${i}</p>
                        <button class="btn btn-secondary"><i class="fas fa-download"></i> Скачать</button>
                    </div>
                `;

                clipsContainer.appendChild(clip);
            }
        } else {
            alert('Пожалуйста, выберите видео для загрузки.');
        }
    });

    // Обработчик скачивания всех клипов
    downloadAllButton.addEventListener('click', function() {
        // Логика для скачивания всех клипов
        alert('Скачивание всех клипов...');
    });
});
