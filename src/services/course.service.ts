import fs from "node:fs";
import path from "node:path";
import { courses as catalogCourses, type Course } from "@/content/catalog";
import type { CourseDetailContent } from "@/content/course-details";

export interface ICourseService {
  listCourseDetailFiles(): string[];
  getCourseDetail(slugOrFilename: string): CourseDetailContent | null;
  getAllCourseDetails(): Record<string, CourseDetailContent>;
  getAllCourses(): Course[];
  getCourseBySlug(slug: string): Course | undefined;
  getCategories(): readonly string[];
}

export class CourseService implements ICourseService {
  private readonly courseDetailsDir: string;

  constructor(customDir?: string) {
    if (customDir) {
      this.courseDetailsDir = customDir;
    } else {
      const srcPath = path.join(process.cwd(), "src", "content", "course-details");
      const rootPath = path.join(process.cwd(), "content", "course-details");
      this.courseDetailsDir = fs.existsSync(srcPath) ? srcPath : rootPath;
    }
  }

  /**
   * List all JSON filenames within the course-details directory.
   */
  listCourseDetailFiles(): string[] {
    try {
      if (!fs.existsSync(this.courseDetailsDir)) {
        return [];
      }
      return fs
        .readdirSync(this.courseDetailsDir)
        .filter((file) => file.endsWith(".json"));
    } catch {
      return [];
    }
  }

  /**
   * Retrieve and parse a course detail JSON file by slug or filename.
   */
  getCourseDetail(slugOrFilename: string): CourseDetailContent | null {
    try {
      const filename = slugOrFilename.endsWith(".json")
        ? slugOrFilename
        : `${slugOrFilename}.json`;
      const filePath = path.join(this.courseDetailsDir, filename);

      if (!fs.existsSync(filePath)) {
        return null;
      }

      const content = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(content) as CourseDetailContent;
    } catch {
      return null;
    }
  }

  /**
   * Load all course details from the course-details directory keyed by slug.
   */
  getAllCourseDetails(): Record<string, CourseDetailContent> {
    const files = this.listCourseDetailFiles();
    const result: Record<string, CourseDetailContent> = {};

    for (const file of files) {
      const slug = file.replace(/\.json$/, "");
      const detail = this.getCourseDetail(file);
      if (detail) {
        result[slug] = detail;
      }
    }

    return result;
  }

  /**
   * Return all courses combining catalog definitions and any uncataloged course-details found on disk.
   */
  getAllCourses(): Course[] {
    const existingCourses: Course[] = [...catalogCourses];
    const existingSlugs = new Set(existingCourses.map((c) => c.slug));

    const files = this.listCourseDetailFiles();
    for (const file of files) {
      const slug = file.replace(/\.json$/, "");
      if (!existingSlugs.has(slug)) {
        const detail = this.getCourseDetail(file);
        if (detail) {
          const autoCourse: Course = {
            category: this.extractCategory(detail.eyebrow),
            title: this.formatTitle(slug, detail),
            description: detail.intro || detail.overview || "",
            duration: this.extractDuration(detail) || "Por confirmar",
            modality: "100% virtual",
            requirement: detail.audience || "Sin requisito específico",
            sourcePath: "",
            slug,
            courseDetail: file,
          };
          existingCourses.push(autoCourse);
          existingSlugs.add(slug);
        }
      }
    }

    return existingCourses;
  }

  /**
   * Find a course by its slug.
   */
  getCourseBySlug(slug: string): Course | undefined {
    return this.getAllCourses().find((c) => c.slug === slug);
  }

  /**
   * Return unique categories starting with 'Todos'.
   */
  getCategories(): readonly string[] {
    const allCourses = this.getAllCourses();
    const uniqueCategories = Array.from(new Set(allCourses.map((c) => c.category)));
    return ["Todos", ...uniqueCategories.filter((c) => c !== "Todos")];
  }

  private extractCategory(eyebrow?: string): string {
    if (!eyebrow) return "General";
    const main = eyebrow.split("/")[0].trim();
    if (main.toLowerCase().includes("salud")) return "Salud";
    if (
      main.toLowerCase().includes("humana") ||
      main.toLowerCase().includes("educaci")
    )
      return "Humana y educación";
    if (
      main.toLowerCase().includes("tecnolog") ||
      main.toLowerCase().includes("computac")
    )
      return "Tecnología";
    return main || "General";
  }

  private formatTitle(slug: string, detail?: CourseDetailContent): string {
    if (
      detail?.overviewTitle &&
      !detail.overviewTitle.toLowerCase().includes("práctica") &&
      !detail.overviewTitle.toLowerCase().includes("orientada")
    ) {
      return detail.overviewTitle;
    }
    return slug
      .replace(/^curso-/, "")
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  private extractDuration(detail: CourseDetailContent): string {
    const question = detail.questions?.find((q) =>
      q.question.toLowerCase().includes("dura"),
    );
    if (question) {
      return question.answer.split(".")[0];
    }
    return "Por confirmar";
  }
}

export const courseService = new CourseService();
