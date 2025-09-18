document.getElementById('download').addEventListener('click', () => {
      const element = document.getElementById('content');
      html2pdf().from(element).save();
    });