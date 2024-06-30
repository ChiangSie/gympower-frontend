// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/GymPower/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/GymPower/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueDevTools from "file:///D:/GymPower/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/GymPower/vite.config.js";
var vite_config_default = defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (mode === "prod") {
    return {
      base: "/cid101/g5/front/",
      build: {
        outDir: "front"
      },
      plugins: [
        vue(),
        VueDevTools()
      ],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
        }
      }
    };
  } else {
    return {
      plugins: [
        vue(),
        VueDevTools()
      ],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
        }
      }
    };
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxHeW1Qb3dlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcR3ltUG93ZXJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0d5bVBvd2VyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlLCBpc1NzckJ1aWxkLCBpc1ByZXZpZXcgfSkgPT4ge1xyXG4gIGlmIChtb2RlID09PSAncHJvZCcpIHtcclxuXHQgIC8vIFx1NjUzRVx1NkU5Nlx1NTA5OVx1OTBFOFx1N0Y3Mlx1NTIzMHNlcnZlclx1NzY4NFx1OEEyRFx1NUI5QVxyXG4gICAgcmV0dXJuIHtcclxuXHRcdCAgYmFzZTogJy9jaWQxMDEvZzUvZnJvbnQvJyxcclxuXHRcdCAgYnVpbGQ6IHtcclxuXHRcdCAgICBvdXREaXI6ICdmcm9udCdcclxuXHRcdCAgfSxcclxuXHRcdCAgcGx1Z2luczogW1xyXG5cdFx0ICAgIHZ1ZSgpLFxyXG5cdFx0ICAgIFZ1ZURldlRvb2xzKCksXHJcblx0XHQgIF0sXHJcblx0XHQgIHJlc29sdmU6IHtcclxuXHRcdCAgICBhbGlhczoge1xyXG5cdFx0ICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcclxuXHRcdCAgICB9XHJcblx0XHQgIH1cclxuXHRcdH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGx1Z2luczogW1xyXG5cdFx0ICAgIHZ1ZSgpLFxyXG5cdFx0ICAgIFZ1ZURldlRvb2xzKCksXHJcblx0XHQgIF0sXHJcblx0XHQgIHJlc29sdmU6IHtcclxuXHRcdCAgICBhbGlhczoge1xyXG5cdFx0ICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcclxuXHRcdCAgICB9XHJcblx0XHQgIH1cclxuICAgIH1cclxuICB9XHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1TixTQUFTLGVBQWUsV0FBVztBQUUxUCxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFKeUcsSUFBTSwyQ0FBMkM7QUFPbEwsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxTQUFTLE1BQU0sWUFBWSxVQUFVLE1BQU07QUFDeEUsTUFBSSxTQUFTLFFBQVE7QUFFbkIsV0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLElBQUk7QUFBQSxRQUNKLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxPQUFPO0FBQUEsVUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLFFBQ3REO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNBLE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsUUFDVCxJQUFJO0FBQUEsUUFDSixZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsT0FBTztBQUFBLFVBQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxRQUN0RDtBQUFBLE1BQ0Y7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
