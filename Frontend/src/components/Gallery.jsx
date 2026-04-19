export default function Gallery() {
  const images = [
    {
      alt: "Race Moment 1",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5MVVShIut3O79VTa46CWxOY9q6GHSqlvUBhVIvxr7HB1bslFg_Ot9bB0x0vhdG5_MG0ONvTIy2rVG0vExfWZhEzzJoQNCODGwVdpFFRpIhTnQSTL13FRO9wFo8jTHNKlHNnTYiAlQ7PZExZjDaLrZmjGaDQfoApPOiBJA90Mnngma2E071zEWl8dHwRhlyXgOMIhIcnQPcM8ecdozJ2pSeXvrj23tglhFdIX4iOSpypAUG08wXONSCuHEu5yx1rYgzJG-p6kgHzff",
      colSpan: "col-span-2",
      rowSpan: "row-span-2"
    },
    {
      alt: "Race Moment 2",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuArEFQJ2qVc_YaJdjqLlrcmUUHwHVRyRhUW4Q8r30I-u3yrqIbn6tRCJgfx368sgp7FRUi9zdC91RBNujIa9JzfCzC6m0ibV71eGpkYVJX1qX8l8xnG3ja88YdVtnaKOtTdh6K4t_eP2cuPihD5vD98HOMH-rGrTW9JXkkh9ZZC5UsM0zcz9B0EJO6VzZyIRkUSFA4DSDT5hk_DK1Z2WI_Nm-IdzklERLrrNIUgD9ItvavUHINmtxNX-v3lDd8nrBShh3gKDfjw_1-F",
      colSpan: "",
      rowSpan: ""
    },
    {
      alt: "Race Moment 3",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH71o2e8NSP_5zAooat3hPkwFGUJ8dm1dngTNlnKUFu2UjxxZLPRKIEo66JFskv88Yh1BZidFsXcEj37khiFjZcGb7wsT9BWvWg9wjBrNDmzXviU-ZJR8vvlMGjxLxgwdY5pgBjxeNRCxqxRNcK3FLTv-JBL8Ut7bxMu7mCaDQAc8bjJFRbi1JomsxmLfk9SxQkMYB7bH6VaLHfdibzd13quj4Hjs2bX3k0qQoJNRkXCEbrWbSDnto6QjCMkSIpBTRegGChCG4da3o",
      colSpan: "",
      rowSpan: "row-span-2"
    },
    {
      alt: "Race Moment 4",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3LxEplL5ivtJd8cCHBCuEL1DNsraLDiA9oMl7CMTzDN2IJU1uhVQ9iMlojF7petA3UJfdyLMK7f07GTtETQ06gOfx7HDCKdKI-tWFDhd2JcMjB_8xti08KbDPfXRdBAJBzRfggDmwhafFKScxIAseqLPGGol_WXSkrO-MdcTjk_y3QOTV7Ewj-2ovmLjtEZ0VXZ-ZVZItEZy5AsxEU5z2y1jV_B1guRFtfvfP7OjZqiIugwBfryq52dAuGZKegV2GxXAMCXvnG8Ly",
      colSpan: "",
      rowSpan: ""
    },
    {
      alt: "Race Moment 5",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8QXll0kn2NHqfCzTEfyOYGSoO-7AxnFV_Tfwp2E8oprkcrqXZfs7r7YsTt-MfPodFt7l07Sf0Sozy6fkQfS6I9YJVLi8mRj2le3-csZGVW-DZ0giW1mXMAHwtlmNyaPXCi0FYNQG68ocRMjQJWhjC4Te6xDaU1YVqOmAzgGzRVP1vW14ZrH1JMnKtX_5BykOYNfP8YguojZ_lsqWQ1H4CkARFKl02f13Rcs6B2CN57bkh3H00trtKSWsMhCyRJxBl0swY_grvGyUJ",
      colSpan: "col-span-2",
      rowSpan: ""
    }
  ];

  return (
    <section className="py-24">
      <div className="px-8 max-w-[1440px] mx-auto mb-16">
        <h2 className="font-headline text-6xl uppercase tracking-tighter">
          THE GRIT IN <span className="text-primary-container">MOTION</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 h-[800px]">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`relative overflow-hidden group ${image.colSpan} ${image.rowSpan}`}
          >
            <img 
              alt={image.alt} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              src={image.src}
            />
            <div className="absolute inset-0 bg-background/40 group-hover:bg-background/0 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
