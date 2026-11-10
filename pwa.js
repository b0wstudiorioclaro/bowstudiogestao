(() => {
  'use strict';

  let installPrompt = null;
  let dismissed = false;
  const isInstalled = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const removeBanner = () => document.getElementById('pwaInstallBanner')?.remove();

  function showInstallBanner() {
    if (!document.body || !installPrompt || dismissed || isInstalled() || document.getElementById('pwaInstallBanner')) return;
    const banner = document.createElement('aside');
    banner.id = 'pwaInstallBanner';
    banner.setAttribute('aria-label', 'Instalar BOW Studio');
    banner.innerHTML = `
      <img src="./icone-app-192.png" width="40" height="40" alt="">
      <span>Tenha o <strong>BOW Studio</strong> na sua tela inicial</span>
      <button type="button" id="btnTriggerPwaInstall">Instalar app</button>
      <button type="button" id="btnDismissPwaInstall" aria-label="Fechar aviso de instalação">×</button>
    `;
    banner.querySelector('#btnDismissPwaInstall').onclick = () => {
      dismissed = true;
      removeBanner();
    };
    banner.querySelector('#btnTriggerPwaInstall').onclick = async () => {
      const prompt = installPrompt;
      if (!prompt) return;
      installPrompt = null;
      removeBanner();
      try {
        await prompt.prompt();
        await prompt.userChoice;
      } catch (error) {
        console.warn('Não foi possível abrir a instalação do BOW Studio.', error);
      }
      // Each installation event can only be used once.
    };
    document.body.append(banner);
  }

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installPrompt = event;
    showInstallBanner();
  });
  window.addEventListener('appinstalled', () => {
    installPrompt = null;
    removeBanner();
  });
  document.addEventListener('DOMContentLoaded', showInstallBanner);

  async function registerWorker() {
    if (!('serviceWorker' in navigator)) return;
    try {
      await navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' });
    } catch (error) {
      console.warn('Não foi possível preparar a instalação do BOW Studio.', error);
    }
  }
  if (document.readyState === 'complete') registerWorker();
  else window.addEventListener('load', registerWorker, { once: true });
})();
