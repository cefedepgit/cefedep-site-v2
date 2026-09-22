import { test, expect } from '@playwright/test';
test('tarjetas y edición de preguntas funcionan sin desbordamiento', async ({page}) => {
 await page.goto('/ehep/pruebas');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
 await page.getByLabel('Modalidad').selectOption('cards'); await page.getByRole('button',{name:'Comenzar práctica'}).click(); await page.getByRole('button',{name:'Mostrar / ocultar respuesta'}).click(); await expect(page.getByText('Respuesta del banco:',{exact:false})).toBeVisible();
 await page.getByRole('button',{name:'Administración',exact:true}).click(); await page.getByRole('button',{name:'Nueva pregunta',exact:true}).click(); await page.getByLabel('Enunciado').fill('Pregunta administrativa de prueba');
 for(let i=1;i<=4;i++) await page.getByLabel(`Opción ${i}`,{exact:true}).fill(`Respuesta ${i}`);
 await page.getByRole('button',{name:'Guardar pregunta',exact:true}).click(); await page.getByLabel('Buscar preguntas').fill('Pregunta administrativa de prueba'); await expect(page.getByRole('article')).toHaveCount(1); await page.getByRole('button',{name:/^Archivar /}).click(); await expect(page.getByRole('article')).toContainText('Archivada'); await page.getByRole('button',{name:/^Restaurar /}).click(); await expect(page.getByRole('article')).toContainText('Activa');
});
test('práctica permite navegar, marcar y revisar resultados', async ({page}) => {
 await page.goto('/ehep/pruebas'); await page.getByLabel('Número de preguntas').fill('5'); await page.getByRole('button',{name:'Comenzar práctica'}).click();
 await page.getByRole('button',{name:/^A\./}).click(); await page.getByRole('button',{name:'Marcar para revisar'}).click(); await page.getByRole('button',{name:'Siguiente',exact:true}).click(); await page.getByRole('button',{name:'Anterior',exact:true}).click();
 await expect(page.getByRole('button',{name:/^A\./})).toHaveAttribute('aria-pressed','true'); await page.getByRole('button',{name:'Finalizar práctica',exact:true}).click(); await expect(page.getByRole('alert').filter({hasText:'Quedan'})).toContainText('4 preguntas'); await page.getByRole('button',{name:'Confirmar finalización'}).click(); await expect(page.getByRole('heading',{name:'Resultados de práctica'})).toBeVisible();
});
test('administración revoca acceso y rechaza importación inválida', async ({page}) => {
 await page.goto('/ehep/pruebas'); await page.getByRole('button',{name:'Administración',exact:true}).click(); await page.getByRole('button',{name:'Desactivar Perfil de prueba · Medicina'}).click(); await page.getByLabel('Importar banco JSON').setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from('[{}]')}); await expect(page.getByRole('status')).toContainText('No se importó'); await page.getByRole('button',{name:'Simulador',exact:true}).click(); await expect(page.getByRole('button',{name:'Comenzar práctica'})).toBeDisabled();
});
test('el tiempo termina la práctica automáticamente', async ({page}) => {
 await page.clock.install(); await page.goto('/ehep/pruebas'); await page.getByLabel('Tiempo en minutos').fill('1'); await page.getByRole('button',{name:'Comenzar práctica'}).click(); await page.clock.fastForward(61000); await expect(page.getByRole('heading',{name:'Resultados de práctica'})).toBeVisible();
});

