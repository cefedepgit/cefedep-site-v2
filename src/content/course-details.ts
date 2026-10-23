import pharmacy from "./course-details/curso-farmacia.json";
import nursing from "./course-details/curso-enfermeria.json";
import occupationalHealth from "./course-details/curso-salud-ocupacional.json";
import firstAid from "./course-details/curso-primeros-auxilios.json";
import legalAssistance from "./course-details/curso-asistencia-juridica.json";
import childcare from "./course-details/curso-asistencia-parvularia.json";
import cosmetics from "./course-details/curso-cosmeticos.json";
import judicialProcedures from "./course-details/curso-tramites-judiciales.json";
import teachingResources from "./course-details/curso-recursos-didacticos.json";
import educationalProjects from "./course-details/curso-proyectos-educativos.json";
import groupFacilitation from "./course-details/curso-facilitacion-grupos.json";
import learningAssessment from "./course-details/curso-evaluacion-desempeno.json";
import pythonAutomation from "./course-details/curso-python-automatizacion.json";
import basicPython from "./course-details/curso-python-basica.json";
import pythonData from "./course-details/curso-python-datos.json";
import computerVision from "./course-details/curso-python-vision.json";
import webDevelopment from "./course-details/curso-desarrollo-web.json";
import cloudComputing from "./course-details/curso-cloud-computing.json";
import equidad from "./course-details/curso-equidad-justicia.json";

import { courseService } from "@/services/course.service";

export type CourseDetailContent = {
  eyebrow: string;
  intro: string;
  overviewTitle: string;
  overview: string;
  audienceTitle: string;
  audience: string;
  modules: { title: string; description: string }[];
  development: string;
  certification: string;
  questions: { question: string; answer: string }[];
};

const baseDetails: Record<string, CourseDetailContent> = {
  "curso-farmacia": pharmacy,
  "curso-enfermeria": nursing,
  "curso-salud-ocupacional": occupationalHealth,
  "curso-primeros-auxilios": firstAid,
  "curso-asistencia-juridica": legalAssistance,
  "curso-asistencia-parvularia": childcare,
  "curso-cosmeticos": cosmetics,
  "curso-tramites-judiciales": judicialProcedures,
  "curso-recursos-didacticos": teachingResources,
  "curso-proyectos-educativos": educationalProjects,
  "curso-facilitacion-grupos": groupFacilitation,
  "curso-evaluacion-desempeno": learningAssessment,
  "curso-equidad-justicia": equidad,
  "curso-python-automatizacion": pythonAutomation,
  "curso-python-basica": basicPython,
  "curso-python-datos": pythonData,
  "curso-python-vision": computerVision,
  "curso-desarrollo-web": webDevelopment,
  "curso-cloud-computing": cloudComputing,
};

export const courseDetails: Record<string, CourseDetailContent> = new Proxy(
  baseDetails,
  {
    get(target, prop: string) {
      if (prop in target) {
        return target[prop];
      }
      const loaded = courseService.getCourseDetail(prop);
      if (loaded) {
        target[prop] = loaded;
        return loaded;
      }
      return undefined;
    },
    has(target, prop: string) {
      if (prop in target) return true;
      return courseService.getCourseDetail(prop) !== null;
    },
    ownKeys(target) {
      const fromDisk = Object.keys(courseService.getAllCourseDetails());
      return Array.from(new Set([...Object.keys(target), ...fromDisk]));
    },
    getOwnPropertyDescriptor(target, prop: string) {
      const val = target[prop] ?? courseService.getCourseDetail(prop);
      if (val !== undefined) {
        return {
          enumerable: true,
          configurable: true,
          value: val,
        };
      }
      return undefined;
    },
  },
);
